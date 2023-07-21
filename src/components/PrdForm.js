import React, { useState } from 'react';
import firebase from '../firebase';

const PrdForm = () => {
  const [prdText, setPrdText] = useState('');

  const handleInputChange = (e) => {
    setPrdText(e.target.value);
  };

  const handleAddPrd = () => {
    if (prdText.trim() !== '') {
      firebase.firestore().collection('products').add({
        text: prdText,
      });
      setPrdText('');
    }
  };

  return (
    <div>
      <input type="text" value={prdText} onChange={handleInputChange} />
      <button onClick={handleAddPrd}>Add Product</button>
    </div>
  );
};

export default PrdForm;
