import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';

import InvoiceTitle from './InvoiceTitle';
import BillTo from './BillTo';
import InvoiceNo from './InvoiceNo';
import InvoiceItemsTable from './InvoiceItemsTable';
import InvoiceThankYouMsg from './InvoiceThankYouMsg';
import CustomerCopy from '../components/CustomerCopy/CustomerCopy';
import CustomerFeedbackForm from '../components/CustomerFeedbackForm/CustomerFeedbackForm';
import Header from '../components/Header/Header';
import HeaderWithAddress from '../components/HeaderWithAddress/HeaderWithAddress';
import Reciept from '../components/Reciept/Reciept';
import LuggageList from '../components/LuggageList/LuggageList';
import InvoiceTable from '../components/InvoiceTable/InvoiceTable';
import FooterWithImage from '../components/FooterWithImage/FooterWithImage';
import TransitPlanFormBox from '../components/TransitPlanFormBox/TransitPlanFormBox';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    justifyContent: 'space-between',
    borderBottom: 1,
    marginBottom: 10,
  },
  logo: {
    width: 74,
    height: 66,
  },
  logo1: {
    width: 74,
    height: 66,
    alignItems: 'center',
    margin: '0 auto',
  },
  headerText: {
    width: '50%',
    fontSize: 20,
    alignItems: 'flex-end',
    color: 'red',
    marginRight: 20,
  },
  headerSubText: {
    marginTop: '10px',
    fontSize: 10,
    alignItems: 'flex-end',
    width: '60%',
    color: 'red',
    textAlign: 'center',
    // jus
  },
  width90: {
    width: '90%',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
  },
  cognisor: {
    color: '#000',
  },
  cognisor1: {
    alignItems: 'center',
  },
  box: {
    border: 1,
  },
  title: {
    color: 'red',
    fontSize: 12,
  },
  title1: {
    color: 'red',
    fontSize: 12,
    borderBottom: 1,
  },
  width60: {
    width: '60%',
  },
  width70: {
    width: '70%',
  },
  width30: {
    width: '30%',
  },
  width50: {
    width: '50%',
  },
  description: {
    width: '75%',
    textAlign: 'left',
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: '25%',
    textAlign: 'right',
    paddingRight: 8,
  },
});

const address = [
  { line: '6TH LANE,2ND CROSS BHAGYANAGAR' },
  { line: ' KALYANDURGAM ROAD,ANANTAPUR,' },
  { line: 'ANDHRA PRADESH-515001' },
];

const Invoice = ({ invoice }) => {
  const {
    consignorF,
    consignorL,
    consigneeF,
    consigneeL,
    oaddress1,
    oaddress2 = '',
    ocity,
    ostate,
    opincode,
    daddress1,
    daddress2 = '',
    dcity,
    dstate,
    dpincode,
    status,
    contact,
    car,
    email,
    insuranceP,
    insuranceA,
    type,
    date,
    gcnno,
    isInvoiceAdded,
    isExpenseAdded,

    // will be added later
    rupeesInNumber = '',
    rupeesInText = '',
    chequeNo = '',
    billNo = '',
    lrNo = '',
  } = invoice;

  const invoiceDetail = {
    consignor: { firstName: consignorF, lastName: consignorL },
    consignee: { firstName: consigneeF, lastName: consigneeL },
    contact,
    email,
    originAddress: [oaddress1, `${oaddress2}, ${ocity}`, `${ostate} - ${opincode}`],
    destinationAddress: [daddress1, `${daddress2}, ${dcity}`, `${dstate} - ${dpincode}`],
    status,
    car,
    insuranceP,
    insuranceA,
    type,
    date,
    gcnno,
    customer: {
      firstName: consignorF,
      lastName: consignorL,
      adderess: `${oaddress1}, ${oaddress2}, ${ocity} - ${opincode}`,
      contact,
      gcnno,
      birthDate: '',
      Anniversary: '',
      jobno: gcnno,
      destination: dcity,
      email,
    },
    reciept: {
      chequeIssuer: `${consignorF} ${consignorL}`,
      rupeesInNumber,
      rupeesInText,
      chequeNo,
      date,
      billNo,
      lrNo,
      from: `${consignorF} ${consignorL}`,
      to: `${consigneeF} ${consigneeL}`,
    },
    invoice: {
      name: `${consignorF} ${consignorL}`,
      dcity,
      invoiceNo: '124124',
      date,
      lrNo: '123124',
      invoiceDetails: [],
      total: 'qweqwr',
      totalInWords: 'qwrqwrqwrqw',
      paymentCity: 'PaymentCity',
    },
    luggageListDetails: {
      ocity,
      dcity,
      gcnno,
      date,
      from: consignorF,
      to: consignorL,
      originAddress: {
        addressLine1: oaddress1,
        addressLine2: oaddress2 || `${oaddress2}, ${ocity}`,
        addressLine3: `${ocity} - ${opincode}`,
      },

      destinationAddress: {
        addressLine1: daddress1,
        addressLine2: daddress2 || `${daddress2}, ${dcity}`,
        addressLine3: `${dcity} - ${dpincode}`,
      },
    },
    tellyData: {
      fullName: `${consignorF} ${consignorL}`,
      location: ocity,
      mode: 'Road',
      gcnno,
      jobno: '??',
      origin: ocity,
      date,
      destination: dcity,
      originAddress: {
        addressLine1: oaddress1,
        addressLine2: oaddress2 || `${oaddress2}, ${ocity}`,
        addressLine3: `${ocity} - ${opincode}`,
      },

      destinationAddress: {
        addressLine1: daddress1,
        addressLine2: daddress2 || `${daddress2}, ${dcity}`,
        addressLine3: `${dcity} - ${dpincode}`,
      },
    },
  };

  const customer = {};
  return (
    <Document>
      <Page size='A4' style={styles.page} orientation='landscape'>
        <CustomerCopy
          title='CUSTOMER COPY'
          consignor={invoiceDetail?.consignor}
          consignee={invoiceDetail?.consignee}
          originAddress={invoiceDetail?.originAddress}
          destinationAddress={invoiceDetail?.destinationAddress}
          type={invoiceDetail?.type}
          gcnno={invoiceDetail?.gcnno}
          date={invoiceDetail?.date}
        />
      </Page>
      <Page size='A4' style={styles.page} orientation='landscape'>
        <CustomerCopy
          title='TRUCK COPY'
          consignor={invoiceDetail?.consignor}
          consignee={invoiceDetail?.consignee}
          originAddress={invoiceDetail?.originAddress}
          destinationAddress={invoiceDetail?.destinationAddress}
          type={invoiceDetail?.type}
          gcnno={invoiceDetail?.gcnno}
          date={invoiceDetail?.date}
        />
      </Page>
      <Page size='A4' style={styles.page}>
        <Header />
        <CustomerFeedbackForm title='DESTINATION' customer={customer} />
      </Page>
      <Page size='A4' style={styles.page}>
        <Header />
        <CustomerFeedbackForm title='ORIGIN' customer={customer} />
      </Page>
      <Page size='A4' style={styles.page}>
        <LuggageList luggageListDetails={invoiceDetail?.luggageListDetails} />
      </Page>
      {isInvoiceAdded && (
        <>
          <Page size='A4' style={styles.page} orientation='landscape'>
            <View style={{ border: 1, margin: 50, padding: 10 }}>
              <HeaderWithAddress />
              <View style={{ marginTop: 20, padding: 10 }}>
                <Reciept reciept={invoiceDetail?.reciept} />
              </View>
            </View>
          </Page>
          <Page size='A4' style={styles.page}>
            <View>
              <Header />
              <InvoiceTable invoice={invoiceDetail?.invoice} />
            </View>
          </Page>
          <Page size='A4' style={styles.page}>
            <View>
              <Header />
              <TransitPlanFormBox transitData={invoiceDetail?.transitData} />
              <View style={{ border: 1 }} />
              <View style={{ border: '1 solid red', marginTop: '2px' }} />
              <FooterWithImage />
            </View>
          </Page>
        </>
      )}
    </Document>
  );
};

// const Invoice = ({ invoice }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <Image style={styles.logo} src={logo} />
//       <InvoiceTitle title="agriculture business" />
//       <InvoiceNo invoice={invoice} />
//       <BillTo invoice={invoice} />
//       <InvoiceItemsTable invoice={invoice} />
//       <InvoiceThankYouMsg />
//     </Page>
//   </Document>
// );

export default Invoice;
