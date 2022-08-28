import React, { useEffect } from "react";
import { useContext } from "react";
import { TransactionContext } from "./context/TransactionContext";
const App = () => {
  const { connectWallet, currentAccount, formData, setformData, handleChange ,sendTransaction,transactions} =
    useContext(TransactionContext);



    console.log(transactions)



    // console.log(handleChange)



    const Input = ({ placeholder, name, type, value, handleChange }) => (
      <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="form-control"
      />
    );

  console.log(currentAccount);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();




    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

 

  return (
    <div>
      <div className="container mt-5">
      <button onClick={connectWallet} className="btn btn-primary">
            Connect Wallete
          </button>
        {currentAccount.lenght === 0 ? (
          <button onClick={connectWallet} className="btn btn-primary">
            Connect Wallete
          </button>
        ) : (
          <></>
        )}
        {currentAccount.lenght === 0 ? (
          <h3 className="mt-3 mb-3">....</h3>
        ) : (
          <>
            <h3 className="mt-3 mb-3">
              <span style={{ fontWeight: "bold" }}>Your Account Is : </span>
              {currentAccount}
            </h3>
          </>
        )}

        <h3 className="mt-3 mb-3">Ehereum</h3>
        <div className="mt-5">




        <input
         placeholder="Address To"
         type="text"
        step="0.0001"
        // value={value}
        onChange={(e) => handleChange(e, "addressTo")}
        className="form-control"
      />
        <input
          placeholder="Amount (ETH)"
         type="number"
        step="0.0001"
        // value={value}
        onChange={(e) => handleChange(e, "amount")}
        className="form-control"
      />
        <input
         placeholder="Keyword (Gif)"
         type="text"
        // step="0.0001"
        // value={value}
        onChange={(e) => handleChange(e, "keyword")}
        className="form-control"
      />
        <input
         placeholder="Enter Message"
         type="text"
        step="0.0001"
        // value={value}
        onChange={(e) => handleChange(e, "message")}
        className="form-control"
      />












{/* 

          <Input
            placeholder="Address To"
            name="addressTo"
            type="text"
            handleChange={handleChange}
           
          /> */}
          {/* <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={handleChange}
          /> */}
          {/* <Input
            placeholder="Keyword (Gif)"
            name="keyword"
            type="text"
            handleChange={handleChange}
          /> */}
          {/* <Input
            placeholder="Enter Message"
            name="message"
            type="text"
            handleChange={handleChange}
          /> */}
          <button onClick={handleSubmit} className="btn btn-primary mt-5">
            Send
          </button>
        </div>
      </div>



      <div className="container">
        <h1 style={{fontSize:20,fontWeight:"bold"}} className="mt-5">Your Last Transactions</h1>






       <table className="table mt-5">
  <thead>


  {
    !transactions?


    <h4 className="text-danger">Login With Your Account</h4>


    :

  <tr>
      <th scope="col">S.N.</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Amount</th>
      <th scope="col">TimeStamp</th>
    </tr>

    
  }






    
  </thead>
  <tbody>


  {


    transactions ?

    


    transactions.map((hit,index)=>{
      return <tr key={index+1}>
      <th scope="row">{index+1}</th>
      <td>{hit.addressFrom.slice(0,20)}...</td>
      <td>{hit.addressTo.slice(0,20)}...</td>
      <td>{hit.amount}</td>
      <td>{hit.timestamp}</td>
    </tr>
    })



    :


    <></>




  }





    
  
  </tbody>
</table>














      </div>










    </div>
  );
};

export default App;
