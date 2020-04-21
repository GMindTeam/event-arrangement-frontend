import React, { useEffect, useState, useContext } from "react";
import EventTable from "../../components/EventTable";
import Alert from "../../components/Alert";
import { Link } from "react-router-dom";
import { Table } from "../../components/EventTable/style";
import { BounceLoader } from "react-spinners";
import { Container, CopyLinkStyle } from "./style";
import Notification from "../../components/Notification"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CreateResponse from "../CreateResponse";
import { getEventDetail, getOptions, deleteResponse } from "../../api";
import { EventContext } from "../../components/EventContext";
import { OptionContext } from "../../components/OptionContext";
import { appPath } from '../../config/constants';
import { routePath } from '../../config/routes';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { theme } from '../../config/mainTheme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTimes, faQuestion} from '@fortawesome/free-solid-svg-icons';

function EventDetail(props) {
  const [event, setEvent] = useContext(EventContext);
  const [loading, setLoading] = useState(true);
  const [, setOption] = useContext(OptionContext);
  const [eventCopy, setEventCopy] = useState("");
  const [countDown, setCountDown] = useState(0);
  const [isCreating, setIsCreating] = useState(false); // thong bao la dang create/edit response
  const [isDone, setIsDone] = useState(false);  //thong bao la response da duoc create/edit
  const [isDeleteing, setIsDeleteing] = useState(false);  //luc gui delete api len server
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);  //check neu enable modal delete response
  const [responseIDIsDeleteing, setResponseIDIsDeleteing] = useState(0);  //thong bao la response da duoc create/edit
  const [isOpentEditResponse, setIsOpentEditResponse] = useState(false); //check neu enable modal edit response
  const [isOpenCreateResponse, setIsOpenCreateResponse] = useState(false);//check neu enable modal create response
  const [countResponse, setCountResponse] = useState([]); //dem so response
  const [count, setCount] = useState([]);
  const [titles, setTitle] = useState("");
  const [responseNeedToEdit, setResponseNeedToEdit] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if(!isCreating)
    {
      countDown >= 0 && setTimeout(() => setCountDown(countDown - 1), 1000); //moi giay thi giam count down di 1
      countDown < 0 && setCountDown(10);  // reinit count down = 10
      countDown === 0 && setEvent(eventCopy); //countdown = 0 thi update table voi gia tri event copy
      countDown === 10 && (function () {    //countdown = 10 thi goi api de luu gia tri eventcopy
        getEventDetail(props.match.params.eventID)
          .then(response => {
            setEventCopy(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      })();
    }
  }, [countDown,isCreating]);


  useEffect(() => {
    getEventDetail(props.match.params.eventID)
      .then(response => {
        setEvent(response.data);
        setEventCopy(response.data);
        setLoading(false);
        setCountResponse(response.data.responselist.length);
      })
      .catch(function (error) {
        console.log(error);
      });
    const requestBody = {
      "eventid": props.match.params.eventID,
    };
    getOptions(requestBody)
      .then(response => {
        setTitle(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [props.match.params.eventID]);

  useEffect(() => {
    var arr = [];
    if (titles instanceof Array) {
      titles.forEach((title, index) => {
        if (event.responselist instanceof Array) {
          event.responselist.forEach(response => {
            if (response.response_detail_list instanceof Array) {
              const answer = response.response_detail_list[index].response_answer;
              return arr.push(answer);
            }
          });
        }
      });
      setCount(arr);
    }

  }, [titles, event.responselist])
  function handleEditResponse(response) {   //xu ly khi click button edit
    if (isOpenCreateResponse) setIsOpenCreateResponse(false);
    setIsOpentEditResponse(true);
    setResponseNeedToEdit(response);
  }
  function handleDeleteResponse(response) {  //xu ly khi click button delete
    setIsOpenDeleteModal(true);
    setResponseIDIsDeleteing(response);
    
  }
  function handleConfirmDeleteResponse() //xu ly khi nguoi dung confirm modal delete
  {
    setIsDeleteing(true);
    deleteResponse('', responseIDIsDeleteing)
      .catch(function (error) {
        console.log(error);
      })
      .then(function() {
        getEventDetail(props.match.params.eventID)
        .then(response => {
          setCountResponse(response.data.responselist.length);
          setEvent(response.data);
          setEventCopy(response.data);
          setIsDeleteing(false);
          setIsOpenDeleteModal(false);
        })
        .catch(function (error) {
          console.log(error);
        });
      });
  }
  function closeModalResponse() {  //xu ly khi click button close cua modal edit/create response
    setIsOpenCreateResponse(false);
    setIsOpentEditResponse(false);
  }
  function closeModalDelete() {  //xu ly khi click button close cua modal confirm delete
    setIsOpenDeleteModal(false);
  }
  function submitHandler() {  //xu ly khi click button submit trong create response
    setIsOpenCreateResponse(false);
    setIsOpentEditResponse(false);
    setIsCreating(true);
    getEventDetail(props.match.params.eventID)
      .then(response => {
        setCountResponse(response.data.responselist.length);
        setEvent(response.data);
        setEventCopy(response.data);
        setIsCreating(false);
        setIsDone(true);
        setTimeout(() => {
          setIsDone(false);
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function handleEditEvent() {  //xu ly khi click button Edit Event
    let titlesTemp = [...titles];
    let OptionArr = '';
    titlesTemp.forEach((singleTitle) => {
      OptionArr += singleTitle.content + '\n';
    });
    setOption(OptionArr);
  }
  function handleCreateResponse() {  //xu ly khi click button Create Response
    if (isOpentEditResponse) setIsOpentEditResponse(false);
    setIsOpenCreateResponse(true);
  }
  function fetchYes() {
    if (titles instanceof Array) {
      return titles.map((title, index) => {
        var counts = {};
        count.slice(index * countResponse, (index + 1) * countResponse).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        return <td> {!isNaN(counts[1]) ? counts[1] : 0}</td>;
      })
    }
  }
  function fetchNo() {
    if (titles instanceof Array) {
      return titles.map((title, index) => {
        var counts = {};
        count.slice(index * countResponse, (index + 1) * countResponse).forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
        return <td> {!isNaN(counts[2]) ? counts[2] : 0}</td>;
      })
    }
  }
  function fetchThinking() {
    if (titles instanceof Array) {
      return titles.map((title, index) => {
        var counts = {};
        count.slice(index * countResponse, (index + 1) * countResponse).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        return <td> {!isNaN(counts[3]) ? counts[3] : 0}</td>;
      })
    }
  }
  function fetchNotResponseYet() {
    if (titles instanceof Array) {
      return titles.map((title, index) => {
        var counts = {};
        count.slice(index * countResponse, (index + 1) * countResponse).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        return <td> {!isNaN(counts[4]) ? counts[4] : 0}</td>;
      })
    }
  }
  function fetchTitle() {
    if (titles instanceof Array) {
      return titles.map((title) => {
        return <th> {title.content}</th>;
      });
    }
  }

  if (loading) {
    return <BounceLoader
      css={"margin:0 auto;margin-top:50px;"}
      size={150}
      color={theme.mainColor1}
    />;
  }
  return (
    <div>
      {isCreating ? <Notification type='loading' message="Đang cập nhật lại bảng..."></Notification> : ''}
      {isDone ? <Notification type='done' message="Bảng đã được cập nhật..."></Notification> : ''}
      {isOpenDeleteModal ? <Alert handleConfirm={handleConfirmDeleteResponse} deleteing={isDeleteing} handleCancel={closeModalDelete}title="Bạn có muốn xoá phản hồi này không ? " description="Bạn sẽ không thể phục hồi lại response đã xoá. "></Alert> : ''}
      <Container>
        <Title>
          <h1>Chi tiết sự kiện</h1>
        </Title>

        <CopyLinkStyle>
          <div className="copy-link-container" >
            <div className="copy-link-inner">
              <input value={appPath.domain + props.match.params.eventID}
              />
              <CopyToClipboard text={appPath.domain + props.match.params.eventID}
                onCopy={() => setCopied(true)}>
                <button >{copied ? "Đã sao chép" : "Sao chép"}</button>
              </CopyToClipboard>
            </div>
          </div>
        </CopyLinkStyle>

        <div>
          <h2 className="eventName">{event.name}</h2>
        </div>
        <div>
          <div className="eventDescription"><h3>Mô tả</h3></div>
          <p className="eventDescription">{event.description}</p>
        </div>
        <div className="table">
          <div className="text"><h3>Thống kê các phản hồi</h3></div>
          <div>
            <Table>
                <tr>
                  <th>Câu trả lời</th>
                  {fetchTitle()}
                </tr>
                <tr>
                  <td>Đồng ý <FontAwesomeIcon icon={faCheck} /></td>
                  {fetchYes()}
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Không đồng ý <FontAwesomeIcon icon={faTimes} /></td>
                  {fetchNo()}
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Suy nghĩ <FontAwesomeIcon icon={faQuestion} /></td>
                  {fetchThinking()}
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Chưa phản hồi</td>
                  {fetchNotResponseYet()}
                  <td></td>
                  <td></td>
                </tr>

            </Table>
          </div>
        </div>
        <div className="table">
          <div className="text"><h3>Danh sách các phản hồi</h3></div>
          <EventTable handlerEdit={handleEditResponse} handlerDelete={handleDeleteResponse} event={event} titles={titles} />

        </div>
        <div className="countDown">
          {isCreating ? " " : <p>Bảng sẽ được làm mới trong {countDown} giây!</p>}

        </div>
        <div className="groupButton">
          <Button onClick={handleCreateResponse}>Tạo phản hồi</Button>
          <Link to={routePath.editEvent + event.id}>
            <Button type="submit" onClick={handleEditEvent}>Chỉnh sửa sự kiện</Button>
          </Link>
        </div>
      </Container >
      <div>
        {isOpenCreateResponse ? <CreateResponse type="create" submitHandler={submitHandler} titles={titles} closeModal={closeModalResponse} eventID={event.id} eventName={event.name} eventDescription={event.description}></CreateResponse> : ""}
        {isOpentEditResponse ? <CreateResponse type="edit" submitHandler={submitHandler} titles={titles} closeModal={closeModalResponse} eventID={event.id} eventName={event.name} eventDescription={event.description} response={responseNeedToEdit}></CreateResponse> : ""}
      </div>
    </div>
  );
}


export default EventDetail;
