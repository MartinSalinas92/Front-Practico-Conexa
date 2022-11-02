import React from 'react'
import { Form } from '../Form'

export const CargaPositionFinish = () => {
  return (
    <>
    <h2 className='text-center'>Coodernadas</h2>
    <div className="row justify-content-center bg-white shadow-lg">
        <div className='col-md-4'>
         <input type="text" class="form-control text-center" value={'0,0'} disabled/>
        </div>
        <div className='col-md-4'>
         <input type="text" class="form-control text-center" value={'0,1'} disabled/>
        </div>
        <div className='col-md-4'>
         <input type="text" class="form-control text-center" value={'0,2'} disabled/>
        </div>
        <div className='col-md-4 mt-5'>
         <input type="text" class="form-control text-center" value={'1,0'} disabled/>
        </div>
        <div className='col-md-4 mt-5'>
         <input type="text" class="form-control text-center" value={'1,1'} disabled/>
        </div>
        <div className='col-md-4 mt-5'>
         <input type="text" class="form-control text-center" value={'1,2'} disabled/>
        </div>
        <div className='col-md-4 mt-5'>
         <input type="text" class="form-control text-center" value={'2,0'} disabled/>
        </div>
        <div className='col-md-4 mt-5'>
         <input type="text" class="form-control text-center" value={'2,1'} disabled/>
        </div>
        <div className='col-md-4 mt-5'>
         <input type="text" class="form-control text-center" value={'2,2'} disabled/>
        </div>

        <Form/>
        
    </div>
    </>
  )
}
