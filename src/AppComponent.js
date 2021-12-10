import React from 'react';
import {useState}  from 'react';
import {AwaitPlayerLoad, Form} from '../threekit/react/components'
import { Buttons, RadioButtons, Dropdown, ColorSwatch, Swatch } from 'threekit/components';
// import Swatch from '../threekit/react/components/InputComponents/Swatch';
import { Button } from 'antd';
import { useName } from 'threekit/react/hooks';
import { useAttribute } from '../threekit/react/hooks';




const AppComponent=()=>{
    const [item, setitem] = useState(0);
    const [showlens, setshowlens] = useState(true);
    const [clicked, setclicked] = useState(false)
    
    const [lensprotector, setlensProtector] =useAttribute('Lens Protector');
    const LensProtectorOn=()=>{
        setlensProtector(lensprotector? 'Yes':'No');
        Displaylens();
    }
    const Displaylens=()=>{
        setshowlens(showlens?false:true);
    }
    // const newArray=[];
    // let id = Case?[hiddenValues];
    const onClicked=()=>{
        setclicked(clicked?true:false);
        if(clicked==true){
            selectCase();
        }
    }
    const name=useName();
    let newArray=[];
    const selectCase=()=>{
        return(
            <div>
                {newArray.push(name)}
                <h4>{name}</h4>
            </div>
        )
    }
    const length=newArray.length;
    // const handleSubmit = ()=>{
    //     window.open(insert path);
    // }
    const AddedItem=()=>{
        if(item<10)
        return setitem(item+1);
    }
    return(
        <div className="Container" style={{alignItems:'center'}}>
            <AwaitPlayerLoad>
            <h4>Select your device</h4>
            <Dropdown title="Select Phone" attribute="Phone"/>
            <ColorSwatch title="Select Phone Color" attribute="Phone Color"/>
            <Buttons onClick={onClicked} style={{border: '2px solid black'}} title="Select your Case"  attribute="Case"/>
            <ColorSwatch title="Select Case Color" attribute="Case Color"/>
            <ColorSwatch title="Select Button Color" attribute="Button Color" />
            <div style={{display: 'inline-block', marginBottom:'20px'}}>
                <Button onClick={LensProtectorOn} style={{display: 'inline-block', marginLeft:'10px', border:'2px solid black'}}>Lens Protector On</Button>
                <Button style={{marginLeft:'10px',border:'2px solid black'}}>Lens Protector Off</Button>
            </div>
            {/* <RadioButtons title='Lens Protector Glass' attribute='Lens Protector'/>  */}
            {/* <swatch attribute='Lens Protector'/> */}
            <div style={{ marginBottom:'20px'}}>
            <Button onClick={AddedItem} style={{display: 'inline-block',border:'2px solid black'}}>Add to Cart</Button>
            <Button onClick={()=>{setitem(0)}} style={{marginLeft:'10px', border:'2px solid black'}}>Clear Item</Button>
            </div>
            <h4 style={{marginTop:'10px'}}>No. of item Added in cart : {item}</h4>
            <div>
                <Button>pick my item: {length}</Button>
            </div>
            </AwaitPlayerLoad>
        </div>
    );
}

export default AppComponent;