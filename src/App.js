import React from 'react'
import { Main } from './views/Main'
import firebase from './firebase'
import { collection, getDocs, getFirestore } from '@firebase/firestore'

export const App = (props) => {
  // const [User, setUser] = useState([]);

  // const db = getFirestore();

  // useEffect(() => {
  //   const querySnapshot = await getDocs(collection(db, 'users'))
  //   querySnapshot.forEach(doc => {
  //     console.log(doc.id)
  //     console.log(doc.data())
  //   })
  // }, [])
  
  
  return (
    <div>
      <Main />
    </div>
  )
}
