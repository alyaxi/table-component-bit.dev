import React from 'react';
import Tabel from '../components/tabel'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "table",
    component: Tabel,
    decorators: ""
}

const data = [
    {name: "Syed Ali uz Zaman",course: "Modern Full Stack Developer"},
    {name: "Imran khan",course: "Artifical Intelligence"},
    {name: "Fawad Choudary",course: "Internet of Things"},
    {name: "Atif Aslam",course: "Cloud Computing"},
    {name: "Qamar Bajwa",course: "BlockChain"},
]

export const DataOfStudent = () => {
    return (<Tabel data={data}/>)
} 
export const Empty = () => {
    return(<Tabel/> )
}