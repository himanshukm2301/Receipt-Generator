import { Component } from '@angular/core';
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";
import * as XLSX from 'xlsx';

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
  paymentMode: string = '';
  purposeOfContribution: string = '';
  transactionID: number = 0;
  salutation: string = '';

  amountInWords: string = '';

  generatePDF() {

    this.amountInWords = this.numberToWords(this.amount);
    // console.log(this.amountInWords);
    // console.log('generatePDF() called');

    // console.log('userName:', this.userName);
    // console.log('mobileNumber:', this.mobileNumber);
    // console.log('address:', this.address);

    // console.log('amount:', this.amount);
    // console.log('paymentDate:', this.paymentDate);
    // console.log('invoiceDate:', this.invoiceDate);

    // console.log('receiptNumber:', this.receiptNumber);
    // console.log('paymentMode:', this.paymentMode);
    // console.log('purposeOfContribution:', this.purposeOfContribution);

    // console.log('transactionID:', this.transactionID);
    // console.log('salutation:', this.salutation);
    

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

Received with thanks from ${this.salutation} ${this.userName}, a generous monetary contribution of Rupees (in words) 

${this.amountInWords} only By ${this.paymentMode} dated ${this.paymentDate} with Transaction ID: ${this.transactionID} on account of 

${this.purposeOfContribution}.



AMOUNT: Rs ${this.amount}/-                                                                                                             Maithil Samanvay Foundation
                                                                                                                                                                SD/-
                                                                                                                                                          Treasurer
                                                                                                                                       
`  ,
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
          text: "The receipt is created on a computer and is valid without the signature and stamp.",
      },
      pageEnable: true,
      pageLabel: "Page",
    };

    var pdfObject = jsPDFInvoiceTemplate(props) //returns number of pages created

    // console.log('pdfObject', pdfObject);
  }

  numberToWords(num: number): string {
    let arr = new Map();
     arr.set(1000000000, "Billion");
     arr.set(1000000, "Million");
     arr.set(1000, "Thousand");
     arr.set(100, "Hundred");
     arr.set(10, "Ten");
     arr.set(9, "Nine");
     arr.set(8, "Eight");
     arr.set(7, "Seven");
     arr.set(6, "Six");
     arr.set(5, "Five");
     arr.set(4, "Four");
     arr.set(3, "Three");
     arr.set(2, "Two");
     arr.set(1, "One");
 
     let second_arr = new Map();
     second_arr.set(9, "Ninety");
     second_arr.set(8, "Eighty");
     second_arr.set(7, "Seventy");
     second_arr.set(6, "Sixty");
     second_arr.set(5, "Fifty");
     second_arr.set(4, "Forty");
     second_arr.set(3, "Thirty");
     second_arr.set(2, "Twenty");
 
     let third_arr = new Map();
     third_arr.set(9, "Nineteen");
     third_arr.set(8, "Eighteen");
     third_arr.set(7, "Seventeen");
     third_arr.set(6, "Sixteen");
     third_arr.set(5, "Fifteen");
     third_arr.set(4, "Fourteen");
     third_arr.set(3, "Thirteen");
     third_arr.set(2, "Twelve");
     third_arr.set(1, "Eleven");
     third_arr.set(0, "Ten");
 
     if(num === 0) return "Zero";
     if(num <= 10) return arr.get(num);
     if(num % 10 === 0 && num > 10 && num < 100) return second_arr.get(Math.floor(num / 10));
      
     let res: string = "";
 
     function func(n:number):string {
         let result: string = "";
         let a = Math.floor(n / 100);
         if(a > 0) {result += arr.get(a) + " " + "Hundred "; n %= 100};
         let b = Math.floor(n / 10);
         if(b > 1) {result += second_arr.get(b) + " "; n %= 10};
         let c = Math.floor(n / 10);
         if(c > 0) result += third_arr.get(n % 10) + " "; else if(n > 0) result += arr.get(n % 10) + " ";
         return result;
     }
 
     for(let [key, elem] of arr) {
         if(num >= key) {
             let a:number = Math.floor(num / key);
             if(a > 9) {
                 res += func(a);
             }
             if(key === 10 && a > 1 && a <= 9) {
                 res += second_arr.get(a) + " " + ((num % key > 0) ? arr.get(num % key) : "");
                 return res.trim();
             } else if(key === 10 && a === 1) {
                 res += third_arr.get(num % key) + " ";
                 return res.trim();
             }
             res += (0 < a && a <= 9 && key % 10 === 0 ? arr.get(a) + " " : "") + elem + " ";
             num %= key;
         }
     }
     return res.trim();
  }

  clickChooseFile() {
    // console.log('parseData() called');

    const realFileBtn =  document.getElementById("actual-btn");
    const customBtn = document.getElementById("custom-btn");
    const customTxt = document.getElementById("custom-text");

    // console.log('customBtn', customBtn);
    // console.log('realFileBtn', realFileBtn);

    customBtn?.addEventListener("click", function() {
      // @ts-ignore
      realFileBtn.click();
    });

    realFileBtn?.addEventListener("change", function() {
      // @ts-ignore
      if (realFileBtn.value) {
        // @ts-ignore
        customTxt.innerHTML = realFileBtn.value.match(/[\\\\\\]([\w\d\s\.\-\(\)]+)$/)[1];
      } else {
        // @ts-ignore
        customTxt.innerHTML = "No file chosen, yet.";
      }
    });

    const fileInput = document.getElementById('actual-btn');
    // @ts-ignore
    fileInput.onchange = () => {
      // @ts-ignore
      const selectedFile = fileInput.files[0];
      // console.log(selectedFile);
    }

  }

  DataFromEventEmitter(data: any) {
    // console.log('parsed excel data: ', data);
    // console.log('parsed excel data: ', data[1]['Amount']);

    for(let row = 8; row < 11; row++){
      this.userName = data[row]['Name'];
      this.amount = data[row]['Amount'];
      this.mobileNumber = data[row]['Mobile Number'];
      this.address = data[row]['Address'];
      this.paymentDate = this.ExcelDateToJSDate(data[row]['Payment Date']);
      this.invoiceDate = this.ExcelDateToJSDate(data[row]['Invoice Date']);
      this.receiptNumber = data[row]['Receipt Number'];
      this.paymentMode = data[row]['Payment Mode'];
      this.purposeOfContribution = data[row]['Purpose of Contribution'];
      this.transactionID = data[row]['Transaction ID'];
      this.salutation = data[row]['Salutation'];

      if(this.amount === undefined) continue;

      this.generatePDF();
      console.log('generated invoice for:', row);
    }
  }

  ExcelDateToJSDate(serial: number) {
    var utc_days  = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;                                        
    var date_info = new Date(utc_value * 1000);
 
    var fractional_day = serial - Math.floor(serial) + 0.0000001;
 
    var total_seconds = Math.floor(86400 * fractional_day);
 
    var seconds = total_seconds % 60;
 
    total_seconds -= seconds;
 
    var hours = Math.floor(total_seconds / (60 * 60));
    var minutes = Math.floor(total_seconds / 60) % 60;
 
    var fullDate = new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
    // console.log('full date', fullDate);

    // split  based on whitespace, then get except the first element and then join again
    var cropDate = fullDate.toDateString().split(' ').slice(1).join(' ');
    // console.log('crop date', cropDate)
    return cropDate;
 }
}