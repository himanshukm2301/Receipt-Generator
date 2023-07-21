import { Component } from '@angular/core';
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rg-app';
  userName: string = 'Himanshu Kumar Mishra';
  amount: number = 100;
  mobileNumber:number = 7984575158;
  address: string = 'Vadodara, Gujarat';
  paymentDate: string = '21/07/2023';
  invoiceDate: string = '21/07/2023';
  receiptNumber: number = 56;
  

  generatePDF() {
    console.log('generatePDF() called');
    console.log('userName:', this.userName);
    console.log('mobileNumber:', this.mobileNumber);
    console.log('address:', this.address);

    console.log('amount:', this.amount);
    console.log('paymentDate:', this.paymentDate);
    console.log('invoiceDate:', this.invoiceDate);
    

    var props = {
      outputType: OutputType.Save,
      returnJsPDFDocObject: true,
      fileName: "Invoice 2021",
      orientationLandscape: false,
      compress: true,
      logo: {
          src: "https://i.ibb.co/HpBJG4y/Screenshot-2023-07-21-at-8-54-26-PM.png",
          type: 'PNG', //optional, when src= data:uri (nodejs case)
          width: 40, //aspect ratio = width/height
          height: 30,
          margin: {
              top: 0, //negative or positive num, from the current position
              left: 0 //negative or positive num, from the current position
          }
      },
      stamp: {
        inAllPages: true, //by default = false, just in the last page
        //src: "https://i.ibb.co/7jH72Hj/namaste.png",
        src: "https://i.ibb.co/JzWCPng/dhy2.png",
        type: 'PNG', //optional, when src= data:uri (nodejs case)
        width: 20, //aspect ratio = width/height
        height: 20,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
      },
      business: {
          name: "MAITHIL SAMANVAY FOUNDATION",
          address: "REGISTRATION NO: 125036",
          phone: "B-58, RAJDEEP 80C NR UNDERA JAKATNAKA, GORWA VILLAGE ",
          email: "VADODARA(M CORP-00), VADODARA, GUJARAT - 390016 ",
          email_1: "maithil.foundation.vdr@gmail.com",
          //website: "www.maithilsamaj.com",
      },
      contact: {
          label: "Receipt Issued For:",
          name: this.userName,
          address: this.address,
          phone: `${this.mobileNumber}`,
          // email: "himanshukm2301@gmail.com",
          // otherInfo: "www.myportfolio.co.in",
      },
      invoice: {
          label: "Receipt No.: ",
          num: this.receiptNumber,
          invDate: `Payment Date: ${this.paymentDate}`,
          invGenDate: `Receipt Date: ${this.invoiceDate}`,
          headerBorder: true,
          tableBodyBorder: false,
          header: [
            // {
            //   title: "#", 
            //   style: { 
            //     width: 10 
            //   } 
            // }, 
            // { 
            //   title: "Title",
            //   style: {
            //     width: 30
            //   } 
            // }, 
            { 
              title: `REBATE UNDER IT ACT 80-G | CERTIFICATE NO.: AAOCM5258PF20222 DT.:10.03.2022 | PAN NO.: AAOCM5258P`,
              style: {
                width: 190
              } 
            }, 
            //{ title: "Amount"},
            //{ title: "Quantity"},
            // { title: "Unit"},
            // { title: "Total"}
          ],
          table: Array.from(Array(1), (item, index)=>([
              // index + 1,
              // "Donation",
              `

Received with thanks from Mr./Mrs./Ms ${this.userName} Rupees (in words) One Hundred only By Online 

Payment dated ${this.paymentDate} with Transaction ID: 24234 on account of Advertisement.


AMOUNT PAID: Rs ${this.amount}                                                                                            Treasurer Sign: Arun Kumar Mishra`,
              // this.amount,
              // 1,
              // "m2",
              // @ts-ignore
//               `
// Rs ${this.amount}`
          ])),
          invDescLabel: "Note:",
          invDesc: `Thank you for your generous donation. Your support is appreciated. 


BANK DETAILS: Maithil Samanvay Foundation
BANK NAME: Kotak Mahindra Bank
ACCOUNT NO.: 9945253830
IFSC CODE: KKBK0002749
BRANCH NAME: Nizampura, Vadodara
          `,
      },
      footer: {
          text: "The invoice is created on a computer and is valid without the signature and stamp.",
      },
      pageEnable: true,
      pageLabel: "Page",
    };

    var pdfObject = jsPDFInvoiceTemplate(props) //returns number of pages created

    console.log('pdfObject', pdfObject);
  }
}

//Cash donation of Rs ${this.amount} made on ${this.paymentDate} by ${this.userName} to the Maithil Samaj Foundation

/**
 * Dear Mr./Ms. ${this.userName},

On behalf of the Mithila Samaj, I would like to express our sincere gratitude for your generous donation of Rs ${this.amount} on ${this.paymentDate}. Your donation will help us continue our mission to preserve and promote the rich culture and heritage of Mithila.

We are grateful for your support and we look forward to continuing to work with you to build a stronger and more vibrant Mithila community.     
`
 */
