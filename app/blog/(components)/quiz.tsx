'use client'
import {Field, Label, Radio, RadioGroup} from '@headlessui/react'
import { select } from 'framer-motion/client'
import { useState, useEffect } from 'react'
const katex = require('katex')

export default function Quiz(props:any){
    let [selected, setSelected] = useState(0)
    let [click,setClick] = useState(false)
    useEffect(() => {
        setClick(false);
    }, [selected]);
    const getCol = (i:number)=>{
        if(selected!=i || !click){
            return("border-blue-400")
        } else if(i==props.answer){
            return("border-green-600")
        } else {
            return("border-red-400")
        }
    }
    return(
        <div className="bg-slate-50 p-6">
            <div className="font-bold">{props.question.split("$").map((p:string,i:number)=>{
                if(i%2==0){
                    return (p)
                } else {
                    return (
                    <div className='inline-block' key={i} dangerouslySetInnerHTML={{__html:katex.renderToString(p,{throwOnError:false})}} />
                    )
                }
            })}</div>
            <fieldset>
                <RadioGroup value={selected} onChange={setSelected}>
                    {props.options.map((op:string,id:number)=>(
                    <Field key={id} className="flex items-center gap-2 p-2 hover:bg-blue-100 transition ease-in-out duration-200">
                        <Radio value={id} aria-label={String(id==props.answer)} className={`group flex size-6 border-4 ${getCol(id)} items-center justify-center rounded-full bg-slate-50 data-[checked]:border-8 transition-all ease-in-out duration-300`} />
                        <Label className="ml-2">{
                            op.split("$").map((p:string,i:number)=>{
                                if(i%2==0){
                                    return (p)
                                } else {
                                    return (
                                    <div className='inline-block' key={i} dangerouslySetInnerHTML={{__html:katex.renderToString(p,{throwOnError:false})}} />
                                    )
                                }
                            })
                        }</Label>
                    </Field>
                ))}</RadioGroup>
                <button className="bg-white py-2 px-4 hover:bg-slate-100 border mt-2" onClick={()=>(setClick(true))}>check</button>
            </fieldset>
            <div className={`bg-slate-100 p-4 -mx-6 -mb-6 mt-2 ${click && selected==props.answer ? "" : "hidden"}`}>{props.explanation.split("$").map((p:string,i:number)=>{
                if(i%2==0){
                    return (p)
                } else {
                    return (
                    <div className='inline-block' key={i} dangerouslySetInnerHTML={{__html:katex.renderToString(p,{throwOnError:false})}} />
                    )
                }
            })}</div>
        </div>
    )
}
//