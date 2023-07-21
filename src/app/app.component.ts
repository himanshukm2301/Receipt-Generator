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
          src: "https://i.ibb.co/zZXJTTV/Maithil-Samaj-Logo.jpg",
          type: 'PNG', //optional, when src= data:uri (nodejs case)
          width: 60, //aspect ratio = width/height
          height: 30,
          margin: {
              top: 0, //negative or positive num, from the current position
              left: 0 //negative or positive num, from the current position
          }
      },
      stamp: {
        inAllPages: true, //by default = false, just in the last page
        src: "https://i.ibb.co/7jH72Hj/namaste.png",
        type: 'PNG', //optional, when src= data:uri (nodejs case)
        width: 20, //aspect ratio = width/height
        height: 20,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
      },
      business: {
          name: "MAITHIL SAMAJ",
          address: "4, Ishwar Nagar, GIDC Road, Manjalpur Vadodara",
          phone: "(+355) 069 11 11 111",
          email: "maithilsamaj@gmail.com",
          // email_1: "info@example.al",
          website: "www.maithilsamaj.com",
      },
      contact: {
          label: "Invoice issued for:",
          name: this.userName,
          address: this.address,
          phone: `${this.mobileNumber}`,
          // email: "himanshukm2301@gmail.com",
          // otherInfo: "www.myportfolio.co.in",
      },
      invoice: {
          label: "Invoice #: ",
          num: 1,
          invDate: `Payment Date: ${this.paymentDate}`,
          invGenDate: `Payment Date: ${this.invoiceDate}`,
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
              title: "Description",
              style: {
                width: 150
              } 
            }, 
            //{ title: "Amount"},
            //{ title: "Quantity"},
            // { title: "Unit"},
            { title: "Total"}
          ],
          table: Array.from(Array(1), (item, index)=>([
              // index + 1,
              // "Donation",
              `
Dear Mr./Ms. ${this.userName},

On behalf of the Mithila Samaj, I would like to express our sincere gratitude for your generous donation of Rs ${this.amount} on ${this.paymentDate}. Your donation will help us continue our mission to preserve and promote the rich culture and heritage of Mithila.

We are grateful for your support and we look forward to continuing to work with you to build a stronger and more vibrant Mithila community.     
`,
              // this.amount,
              // 1,
              // "m2",
              // @ts-ignore
              `
Rs ${this.amount}`
          ])),
          invDescLabel: "Invoice Note",
          invDesc: "Thank you for your generous donation. Your support is appreciated.",
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
