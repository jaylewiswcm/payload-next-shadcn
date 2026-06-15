"use client"
import { AddressFinder } from "@ideal-postcodes/address-finder";
import { useEffect, useRef, useState } from "react";

export function PostcodeLookup() {
const [manualAddress, setManualAddress] = useState(false);
const [buttonLabel, setButtonLabel] = useState('I’d like to enter my address manually');
const [addressPopulated, setAddressPopulated] = useState(false);


const postcodeRef = useRef(null);
const lineOneRef = useRef(null);

const controllerRef = useRef<any | null>(null);

useEffect(() => {
  if(!postcodeRef.current) return;

    controllerRef.current = AddressFinder.setup({
      apiKey: "ak_m7t5wh7thWB3nuntnaMCjjUoSatXp",
      inputField: postcodeRef.current,
      outputFields: {
        line_1: lineOneRef.current,
      },
      onAddressPopulated: function () {
        setAddressPopulated(true);
        this.detach();
        setManualAddress(true);
        setButtonLabel('Use postcode lookup instead')
        
      },
    });
  
}, [postcodeRef])

useEffect(() => {
   if (!controllerRef.current) return;

    if(manualAddress)  {
      controllerRef.current.detach();
    } else {
       controllerRef.current.attach();
    }

}, [controllerRef, manualAddress])


  const toggleManualAddress = (e) => {
    e.preventDefault();
  
    setButtonLabel(!manualAddress ? 'Use postcode lookup instead' : 'I’d like to enter my address manually');
    setManualAddress(!manualAddress);
    
  }

  return(
    <>
    <div className="address-lookup">
     <fieldset className="input-wrapper" data-lenis-prevent>
        <label htmlFor="postcode" className="font-medium">Postcode<span className="required text-red-500">*</span></label> 
        <input type="zip" name="postcode" id="postcode" placeholder="Enter postcode" className="text-gray-500" ref={postcodeRef}/>
      </fieldset>
      <button className="address-lookup__toggle" onClick={(e) => toggleManualAddress(e)}>{buttonLabel}</button>
     </div>
      <fieldset className={`input-wrapper ${addressPopulated == false ? 'hide' : ''}`}>
        <label htmlFor="street-address" className="font-medium">First line of address<span className="required text-red-500">*</span></label> 
        <input type="text" name="street-address" id="street-address" placeholder="Enter postcode" className="text-gray-500" ref={lineOneRef}/>
      </fieldset>
    </>
  )

}