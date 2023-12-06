import React, { useState, useEffect, useContext } from "react";
import OrderKort from "../anställda/OrderKort";
import { updateOrder } from "../../dataApi/updateStatus&Msg.js";
import { updateCustomerInfo } from "../../dataApi/updateCustomerInfo.js";
import { removeOrder } from "../../dataApi/removeOrder.js";
import { FunkyContext } from "../../ContextRoot";
import {
  isValidName,
  isValidEmailAddress,
  isValidPhoneNumber,
} from "../validation";

const UntreatedOrder = ({
  chartData,
  orders,
  deleteOrderItem,
  deleteOrder,
  addOrderItem,
  moveOrder,
  menuName,
}) => {
  // States
  const [isLocked, setIsLocked] = useState(false);
  const [orderId, setOrderId] = useState(); // State-variabel för order._id
  const [orderStatus, setOrderStatus] = useState("");

  const [isEmptyName, setIsEmptyName] = useState(false);
  const [isEmptyPhoneNumber, setIsEmptyPhoneNumber] = useState(false);
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);

  // Validation
  const [wrongName, setWrongName] = useState(false);
  const [wrongPhoneNumber, setWrongPhoneNumber] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);

  // Inputs
  const [msgToCook, setMsgToCook] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerFloor, setCustomerFloor] = useState("");
  const [customerPortCode, setCustomerPortCode] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  // For validation
  const [isValidFullName, notValidFullName] = isValidName(customerName);
  const [isValidNumber, notValidNumber] = isValidPhoneNumber(customerPhone);
  const [isValidEmail, notValidEmail] = isValidEmailAddress(customerEmail);

  const nameChange = (e) => {
    setCustomerName(e.target.value);

    if (e.target.value === "") {
      setIsEmptyName(true);
    } else {
      setIsEmptyName(false);
    }
  };

  const emailChange = (e) => {
    setCustomerEmail(e.target.value);

    if (e.target.value === "") {
      setIsEmptyEmail(true);
    } else {
      setIsEmptyEmail(false);
    }
  };

  const phoneChange = (e) => {
    setCustomerPhone(e.target.value);

    if (e.target.value === "") {
      setIsEmptyPhoneNumber(true);
    } else {
      setIsEmptyPhoneNumber(false);
    }
  };

  // Select
  const [selectOrder, setSelectOrder] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  const onDeselectOrder = () => {
    onSelectOrder({});
    console.log(isSelected);
    setIsSelected(false);
  };

  // const selectedOrder = chartData.find((item) => item._id === orderId);

  // useEffect(() => {
  //     if (selectedOrder) {
  //         setCustomerName(selectedOrder.customerName);
  //         setCustomerAddress(selectedOrder.address);
  //         setCustomerFloor(selectedOrder.floor);
  //         setCustomerPortCode(selectedOrder.portCode);
  //         setCustomerEmail(selectedOrder.mail);
  //         setCustomerPhone(selectedOrder.mobile);
  //     }
  // }, [selectedOrder]);

  const onChangeTextArea = (event) => {
    setMsgToCook(event.target.value);
  };

  const onSelectOrder = (order) => {
    setSelectOrder(order);
    setOrderId(order._id);
    setOrderStatus("during-treatment");
  };

  const onSubmitOrder = async (order) => {
    console.log(order._id);
    console.log(customerName);
    console.log(orderId);
    moveOrder(order._id);
    const response = await updateOrder(orderStatus, order._id, msgToCook);
  };

  const setInfo = (order) => {
    setCustomerName(order.customerName);
    setCustomerAddress(order.adress);
    setCustomerFloor(order.floor);
    setCustomerPortCode(order.portCode);
    setCustomerEmail(order.mail);
    setCustomerPhone(order.mobile);
    setOrderId(order._id);
    onSelectOrder(order);
    setIsSelected(true);
  };

  // Edit order
  const [editOrder, setEditOrder] = useState({});
  const { isEditing, setIsEditing } = useContext(FunkyContext);

  const onEditOrder = (order) => {
    setEditOrder(order);
    setIsEditing(true);
  };

  const saveEditedOrder = async (order) => {
    const response = await updateCustomerInfo(
      order._id,
      customerName,
      customerAddress,
      customerFloor,
      customerPortCode,
      customerEmail,
      customerPhone
    );
    if (response) {
      setIsEditing(false);
      setEditOrder({});
    }
  };

  // Cancel order
  const cancelOrder = (orderId) => {
    chartData.filter((order) => order._id !== orderId);
    removeOrder(orderId);
    deleteOrder(orderId);
  };

  // style
  const validationErrorBorder = (empty, wrong, isValid) => {
    return {
      border: empty
        ? null
        : wrong
        ? isValid
          ? "2px solid #48E761"
          : "2px solid #FF0000"
        : null,
    };
  };

  return (
    <>
      {chartData.map((order) => (
        <div key={order._id} className="order-box">
          {editOrder._id === order._id ? (
            <span className="material-symbols-outlined">edit</span>
          ) : selectOrder._id === order._id ? (
            <span className="material-symbols-outlined">toggle_on</span>
          ) : (
            <span className="material-symbols-outlined">schedule</span>
          )}
          <p className="order-name">Ordernummer {order.orderId}</p>

          {selectOrder._id === order._id ? (
            <>
              <details className="details">
                <summary
                  className="summary"
                  title={`Kika på order ${order.orderId}`}
                >
                  {isEditing ? null : (
                    <>
                      <button
                        className="button-edit"
                        title="Redigera order"
                        onClick={() => onEditOrder(order)}
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button
                        className="button-decline"
                        title="Ta bort hela ordern"
                        onClick={() => cancelOrder(order._id)}
                      >
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                      <button
                        onClick={() => onDeselectOrder()}
                        className="button-deselect"
                        title="Avmarkera order"
                      >
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </>
                  )}
                </summary>

                {editOrder._id === order._id ? (
                  <>
                    <div className="details-about-order">
                      <div className="message-board">
                        <p>Denna order redigeras...</p>
                      </div>
                      <hr />
                      {/* Render OrderKort outside the loop */}
                      <OrderKort
                        key={order.id}
                        order={order}
                        orders={orders}
                        deleteOrderItem={deleteOrderItem}
                        addOrderItem={addOrderItem}
                      />{" "}
                      <details>
                        <summary className="summary-box">Info om kund</summary>
                        <div className="multi-inputs">
                          <div className="label-above-input">
                            <label htmlFor="customerNameInput">Namn: </label>{" "}
                            <input
                              className="input"
                              id="customerNameInput"
                              type="text"
                              style={validationErrorBorder(
                                isEmptyName,
                                wrongName,
                                isValidFullName
                              )}
                              value={customerName}
                              onChange={nameChange}
                              onBlur={() => setWrongName(true)}
                            />
                            {!isEmptyName && (
                              <div className="validation-error">
                                <p>
                                  {isEmptyName
                                    ? ""
                                    : wrongName
                                    ? notValidFullName
                                    : ""}
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="label-above-input">
                            <label htmlFor="customerAddressInput">
                              Address:{" "}
                            </label>{" "}
                            <input
                              className="input"
                              id="customerAddressInput"
                              type="text"
                              value={customerAddress}
                              onChange={(e) =>
                                setCustomerAddress(e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="multi-inputs">
                          <div className="label-above-input">
                            <label htmlFor="customerFloorInput">Våning: </label>
                            <input
                              className="input"
                              id="customerFloorInput"
                              type="number"
                              value={customerFloor}
                              onChange={(e) => setCustomerFloor(e.target.value)}
                            />
                          </div>
                          <div className="label-above-input">
                            <label htmlFor="customerPortCodeInput">
                              Portkod:{" "}
                            </label>
                            <input
                              className="input"
                              id="customerPortCodeInput"
                              type="number"
                              value={customerPortCode}
                              onChange={(e) =>
                                setCustomerPortCode(e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="multi-inputs">
                          <div className="label-above-input">
                            <label htmlFor="customerEmailInput">Mejl: </label>{" "}
                            <input
                              className="input"
                              id="customerEmailInput"
                              type="email"
                              style={validationErrorBorder(
                                isEmptyEmail,
                                wrongEmail,
                                isValidEmail
                              )}
                              value={customerEmail}
                              onChange={emailChange}
                              onBlur={() => setWrongEmail(true)}
                            />
                            {!isEmptyEmail && (
                              <div className="validation-error">
                                <p>
                                  {isEmptyEmail
                                    ? ""
                                    : wrongEmail
                                    ? notValidEmail
                                    : ""}
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="label-above-input">
                            <label htmlFor="customerPhoneInput">
                              Telefonnummer:{" "}
                            </label>
                            <input
                              className="input"
                              id="customerPhoneInput"
                              type="number"
                              style={validationErrorBorder(
                                isEmptyPhoneNumber,
                                wrongPhoneNumber,
                                isValidNumber
                              )}
                              value={customerPhone}
                              onChange={phoneChange}
                              onBlur={() => setWrongPhoneNumber(true)}
                            />
                            {!isEmptyPhoneNumber && (
                              <div className="validation-error">
                                <p>
                                  {isEmptyPhoneNumber
                                    ? ""
                                    : wrongPhoneNumber
                                    ? notValidNumber
                                    : ""}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </details>
                      <div className="button-to-right-div">
                        <button
                          className="button-confirm"
                          type="submit"
                          onClick={() => saveEditedOrder(order)}
                        >
                          Slutför ändring
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="details-about-order">
                      <hr />
                      {/* Render OrderKort outside the loop */}
                      <OrderKort
                        key={order.id}
                        order={order}
                        orders={orders}
                        deleteOrderItem={deleteOrderItem}
                        addOrderItem={addOrderItem}
                      />

                      <details>
                        <summary className="summary-box">
                          Meddela kocken
                        </summary>
                        <textarea
                          className="input msg-to-cook-textarea"
                          onChange={onChangeTextArea}
                          placeholder="Meddelande till kocken"
                        />
                      </details>

                      <details>
                        <summary className="summary-box">Info om kund</summary>
                        <p>Namn: {order.customerName} </p>
                        <p>Adress: {order.adress} </p>
                        <p>Våning: {order.floor} </p>
                        <p>Portkod: {order.portCode} </p>
                        <p>Mejl: {order.mail} </p>
                        <p>Telefonnummer: {order.mobile} </p>
                        <p>Kommentarer från kund: {order.comments}</p>
                      </details>
                      <div className="button-to-right-div">
                        <button
                          className="button-confirm"
                          type="submit"
                          onClick={() => onSubmitOrder(order)}
                        >
                          Skicka till kocken{" "}
                          {isLocked && (
                            <span className="material-symbols-outlined">
                              lock
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </details>
            </>
          ) : (
            <button onClick={() => setInfo(order)} className="button-mark">
              Markera
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default UntreatedOrder;
