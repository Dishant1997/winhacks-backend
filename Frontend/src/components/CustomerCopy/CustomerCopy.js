import React from 'react';
import { Image, Text, View, StyleSheet } from '@react-pdf/renderer';

import logo from '../../logo.png';
import Boxwith4Line from '../BoxWith4Line/BoxWith4Line';
import BoxWith4LineKeys from '../BoxWith4LineKeys/BoxWith4LineKeys';
import CustomerPackageDesTable from '../CustomerPackageDesTable/CustomerPackageDesTable';
import ConsignmentBox from '../ConsignmentBox/ConsignmentBox';
import AcknowledgementTable from '../AcknowledgementTable/AcknowledgementTable';
import AffliationBox from '../AffliationBox/AffliationBox';

const styles = StyleSheet.create({
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
    width: 150,
    height: 76,
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
  },
  headerSubText2: {
    fontSize: 10,
    marginTop: '0px',
    alignItems: 'flex-end',
    width: '60%',
    color: 'red',
  },
  width90: {
    width: '90%',
    alignItems: 'flex-end',
  },
  title: {
    color: 'red',
    fontSize: 12,
  },
});

const CustomerCopy = ({
  consignor,
  consignee,
  title,
  originAddress,
  destinationAddress,
  type,
  gcnno,
  carGcnno,
  date,
  phone,
  ocity,
  dcity
}) => {
  return (
    <View>
      <View style={styles.container} wrap={false}>
        <Image style={styles.logo} src={logo} />
        <View wrap={false} style={styles.width90}>
          <Text style={styles.headerText}>We Make Moving Easy</Text>
          <Text style={styles.headerSubText}>
            310, Arista, Sindhubhavan Road, Opp. HOF Showroom,
          </Text>
          <Text style={styles.headerSubText2}>Off. S.G.Highway, Ahmedabad-380054. M. 9825219378</Text>
          <Text style={styles.headerSubText}>E: info@acerelocations.co.in W: www.acerelocations.co.in</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexGrow: 1,
        }}
      >
        <View
          style={{
            height: '400px',
            width: '70%',
          }}
        >
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginBottom: '10px',
            }}
          >
            <View style={{ width: '70%' }}>
              <Boxwith4Line
                title='Cognisor'
                address={originAddress}
                fullName={`${consignor ?.firstName} ${consignor ?.lastName}`}
              />
            </View>
            <View style={{ width: '30%', border: '1 1 1 0' }}>
              <BoxWith4LineKeys
                gcnNo={gcnno}
                date={date}
                from={ocity}
                to={dcity}
              />
            </View>
          </View>
          <View style={{ marginBottom: '10px' }}>
            <Boxwith4Line
              title='Consignee'
              address={destinationAddress}
              fullName={`${consignee ?.firstName} ${consignee ?.lastName}`}
            />
          </View>

          <CustomerPackageDesTable
            // description='This is very looooooooooooooooooooooooooooong Description'
            description={type}
            noOfPkg={' '}
          />

          <View>
            <Text style={{ color: 'red', fontSize: 7, marginLeft: 2 }}>
              Note : Corrugated boxes, PVC boxes, Fiber drums & Moving blankets are property of ACE
              Relocations
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '400px',
            width: '30%',
            alignItems: 'center',
            padding: 3,
          }}
        >
          <Text style={styles.title}>{title}</Text>
          <ConsignmentBox />
          <AcknowledgementTable
            fullName={`${consignee ?.firstName} ${consignee ?.lastName}`}
            number={phone}
          />
          <AffliationBox />
          <View style={{ marginTop: 5 }}>
            <Text style={{ color: 'red', fontSize: 8 }}>Subject to Ahmedabad jurisdiction</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomerCopy;
