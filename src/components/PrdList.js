import React, { useEffect, useState } from 'react';
import firebase from '../firebase';
import PrdItem from './PrdItem';
//import '../App.css'

const PrdList = () => {
  const [prdData, setPrdData] = useState([]);

  const styles = {
    prds: {
        padding: '0.5rem',
        nthChild: 'even',
    },
    // prds:nthChild(even) { background: '#CCC' },
    // prds:nthChild(odd)  { background: '#FFF' }
    // div:nthChild(even) { backgroundColor: 'Lightgreen' }
    //prds: nth-child(even) { backgroundColor: 'Lightgreen' }

  };


  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        const prdData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log(prdData);
        setPrdData(prdData);
      });

    return () => unsubscribe();
  }, []);

  return (
    <div style={styles.prds}>
      {
        prdData.map((prd) => ( <PrdItem prd={prd} key={prd.id} /> ))
      }
    </div>
  );
};
// key={prd.id} 
export default PrdList;
