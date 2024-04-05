import { DownloadSimple } from "@phosphor-icons/react";
import React from "react";
import { DateConverter } from "../../../utils/converter";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Invoice = ({ paymentDatas }) => {
  console.log(paymentDatas, "fgjskf");

  const generatePDF = () => {
    const input = document.getElementById("invoice");
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 210; // PDF width
        const pageHeight = 297; // PDF height
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("invoice.pdf");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="text-sm font-semibold">
            <td className="p-4 ">Bill Date</td>
            <td>Amount</td>
            <td>Amount</td>
            <td></td>
          </tr>
        </thead>
        <tbody className="text-sm font-normal">
          {paymentDatas &&
            paymentDatas?.length > 0 &&
            paymentDatas.map((item, idx) => (
              <tr key={idx}>
                <td className="p-4 border-t">
                  {DateConverter(item.createdAt)}
                </td>
                <td className=" border-t">${item.amount}</td>
                <td className=" border-t">{item.status}</td>
                <td className=" border-t">
                  <DownloadSimple
                    className="text-indigo-600 cursor-pointer"
                    size={20}
                    weight="bold"
                    onClick={() => generatePDF(item)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div>
        <h1>Invoice</h1>
        <div id="invoice" style={{ backgroundColor: "white", padding: "20px" }}>
          <h2>Invoice Number: #5465fsf</h2>
          <p>Date: 05 April, 2024</p>
          <p>Customer: John Doe</p>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid black" }}>
                <th style={{ textAlign: "left", padding: "8px" }}>Item</th>
                <th style={{ textAlign: "right", padding: "8px" }}>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid black" }}>
                <td style={{ textAlign: "left", padding: "8px" }}>Item 1</td>
                <td style={{ textAlign: "right", padding: "8px" }}>$10.00</td>
              </tr>
              <tr style={{ borderBottom: "1px solid black" }}>
                <td style={{ textAlign: "left", padding: "8px" }}>Item 2</td>
                <td style={{ textAlign: "right", padding: "8px" }}>$20.00</td>
              </tr>
              <tr style={{ borderBottom: "1px solid black" }}>
                <td style={{ textAlign: "left", padding: "8px" }}>Item 3</td>
                <td style={{ textAlign: "right", padding: "8px" }}>$30.00</td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "right", marginTop: "20px" }}>Total: $60.00</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;

const InvoiceComponent = (data) => {
  return (
    <div>
      <h1>Invoice</h1>
      <div id="invoice" style={{ backgroundColor: "white", padding: "20px" }}>
        <h2>Invoice Number: {data.invoiceId}</h2>
        <p>Date: {DateConverter(data.createdAt)}</p>
        <p>Customer: John Doe</p>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid black" }}>
              <th style={{ textAlign: "left", padding: "8px" }}>Item</th>
              <th style={{ textAlign: "right", padding: "8px" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid black" }}>
              <td style={{ textAlign: "left", padding: "8px" }}>Item 1</td>
              <td style={{ textAlign: "right", padding: "8px" }}>$10.00</td>
            </tr>
            <tr style={{ borderBottom: "1px solid black" }}>
              <td style={{ textAlign: "left", padding: "8px" }}>Item 2</td>
              <td style={{ textAlign: "right", padding: "8px" }}>$20.00</td>
            </tr>
            <tr style={{ borderBottom: "1px solid black" }}>
              <td style={{ textAlign: "left", padding: "8px" }}>Item 3</td>
              <td style={{ textAlign: "right", padding: "8px" }}>$30.00</td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: "right", marginTop: "20px" }}>Total: $60.00</p>
      </div>
      <button onClick={this.generatePDF}>Download Invoice</button>
    </div>
  );
};
