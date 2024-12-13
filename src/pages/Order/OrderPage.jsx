import React, { useState} from 'react';
import { useParams } from 'react-router-dom';  
import MainLayout from "../../layouts/MainLayout";
import styles from "./styles.module.scss";

const OrderPage = () => {
  const { tableId } = useParams();  
 
  const menuItemsData = [
    { id: 1, name: 'Pho Bo', price: 50000 },
    { id: 2, name: 'Banh Mi', price: 25000 },
    { id: 3, name: 'Com Tam', price: 35000 },
    { id: 4, name: 'Goi Cuon', price: 20000 },
  ];

  const [orderItems, setOrderItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddItem = (item) => {
    const existingItemIndex = orderItems.findIndex(orderItem => orderItem.id === item.id);
    
    if (existingItemIndex !== -1) {
      const updatedOrderItems = [...orderItems];
      updatedOrderItems[existingItemIndex].quantity += 1;
      setOrderItems(updatedOrderItems);
      setTotal(prevTotal => prevTotal + item.price);
    } else {
      setOrderItems(prevItems => [
        ...prevItems,
        { ...item, quantity: 1 }
      ]);
      setTotal(prevTotal => prevTotal + item.price);
    }
  };

  const handleQuantityChange = (itemId, change) => {
    const updatedOrderItems = orderItems.map(item => {
      if (item.id === itemId) {
        const updatedQuantity = item.quantity + change;
        if (updatedQuantity <= 0) return item; 
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    
    setOrderItems(updatedOrderItems);
    setTotal(updatedOrderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0));
  };

  const filteredMenuItems = menuItemsData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className={styles.orderPageWrap}>
        <div className={styles.mainWrap}>
          <div className={styles.headerMainWrap}>
            <span className={styles.title}>Order for Table {tableId}</span>
            <div className={styles.actionsWrap}>
              <div className={styles.totalRecords}>
                Total: {total} VND
              </div>
            </div>
          </div>

          <div className={styles.searchWrap}>
            <input
              type="text"
              placeholder="Search for food..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className={styles.menuItemsWrap}>
            <h3>Menu</h3>
            <div className={styles.menuList}>
              {filteredMenuItems.map(item => (
                <div key={item.id} className={styles.menuItem}>
                  <span>{item.name}</span>
                  <span>{item.price} VND</span>
                  <button className={styles.addItemButton} onClick={() => handleAddItem(item)}>
                    Add to Order
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.orderItemsWrap}>
            <h3>Order Items</h3>
            {orderItems.map(item => (
              <div key={item.id} className={styles.orderItem}>
                <span>{item.name}</span>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <span>{item.price * item.quantity} VND</span>
              </div>
            ))}
          </div>

          <div className={styles.orderSummaryWrap}>
            <h3>Total: {total} VND</h3>
            <div>
              <button className={styles.checkoutButton}>In hóa đơn</button>
              <button className={styles.printButton}>Thanh toán</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OrderPage;
