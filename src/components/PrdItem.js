import React, { useState } from 'react';
import firebase from '../firebase';
import '../App.css'

const PrdItem = ( {prd} ) => {
  //console.log(prd);
  const [isEditing, setEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(prd.text);

  const styles = {
    itemrow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingLeft: '0.5rem',
        // margin: '0.5rem 0',
        marginBottom: '0.5rem',
        //background: '#CCC'
        //borderBottom: '1px solid #ccc'
    }
  };

  const handleToggleEdit = () => {
    setEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setUpdatedText(e.target.value);
  };

  const handleUpdatePrd = () => {
    if (updatedText.trim() !== '') {
      firebase.firestore().collection('products').doc(prd.id).update({
        text: updatedText,
      });
      setEditing(false);
    }
  };

  const handleDeletePrd = () => {
    firebase.firestore().collection('products').doc(prd.id).delete();
  };

  return (
    // style={{color:"red", backgroundColor:"cyan", padding:"2px 5px 2px 2px"}}
    <div style={styles.itemrow}>
      {isEditing ? (
        <div >
          <input type="text" value={updatedText} onChange={handleInputChange} />
          <button onClick={handleUpdatePrd}>Update</button>
          <button onClick={handleToggleEdit}>Cancel</button>
        </div>
      ) : (
        <div >
          <span style={{paddingRight:"15px"}}> {prd.text}</span>
          <button onClick={handleToggleEdit}>Edit</button>
          <button onClick={handleDeletePrd}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default PrdItem;
