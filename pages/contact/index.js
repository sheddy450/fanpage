import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    const [state, handleSubmit] = useForm("meqwdkye");
  if (state.succeeded) {
      return <p><Contact/></p>;
  }
    return ( 
        <form onSubmit={handleSubmit}  className='grid  gap-2 justify-center font-poppins' >
               
        <div>
        <div className=' flex gap-2 '>
         <input type="text" name='Name' placeholder='Name' className= 'border border-gray-400 rounded-lg p-2 w-[15em]' required/>
          <input type="text" name='Surname' placeholder='Surname' className=' border border-gray-400  rounded-lg p-2  w-[15em]' required/>
          <ValidationError prefix="Message" field="message" errors={state.errors}/>
         </div>
          <div className='grid'>
          <input type="text" name='Email' placeholder='Email' className='border border-gray-400 rounded-lg p-2 w-[30.5em]'   required/>
          <input type="text" name='Location' placeholder='Where are you from?' className='border border-gray-400 rounded-lg p-2 w-[30.5em]'   required/>
          <input type="text" name='FirstTime' placeholder='How did you first become a fan of Namjoo?' className='border border-gray-400 rounded-lg p-2 w-[30.5em]'   required/>
          <input type="text" name='Favourite' placeholder='What is your favourite Nam joo Movie/Tv show?' className='border border-gray-400 rounded-lg p-2 w-[30.5em]'  required />
          <ValidationError prefix="Message" field="message" errors={state.errors}/>
          </div>
        </div>

          <p >Would you like to receive updates about Nam Joo's Upcoming events, projects, and merchandise?</p>

         <div className='grid text-xl'>
          <div>
           <input  type='radio' name='Namjoo update: yes'/>
            <label>Yes</label>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
          </div>
          <div>
           <input type='radio' name='Namjoo update:No' />
            <label>No</label>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
          </div>
         </div>
         <h1 >Make your Reservation</h1>
         <div required>
        <div className='flex justify-between border border-gray-400 p-5 rounded-lg shadow-lg'>
           <div className='space-x-2'>
           <input className=' transform' type='radio' name='reservation $750'/>
            <label className='max-w-sm'>Access to Exclusive Content: behind the scene photos, videos and fan meet & greet </label>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
           </div>
            <h1 className='ml-10'>$750</h1>
          </div>
          <div className='flex justify-between border border-gray-400 p-5 rounded-lg shadow-lg'>
            <div className='space-x-2'>
            <input type='radio' name='reservation $500'/>
            <label >Opportunities to participate in fan club contests and giveaways</label>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </div>
            <h1>$500</h1>
          </div>
          <div className='flex justify-between border border-gray-400  p-5 rounded-lg shadow-lg'>
            <div className='space-x-2'>
            <input type='radio' name='reservation $400'/>
            <label>Early Access to tickets for Nam Joo Events </label>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </div>
            <h1>$400</h1>
          </div>
          <div className='flex justify-between border border-gray-400  p-5 rounded-lg mb-5 shadow-lg'>
            <div className='space-x-2'>
            <input type='radio' name='reservation $150'/>
            <label>Exclusive opportunity to have face time with Nam Joo</label>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </div>
            <h1>$150</h1>
          </div>
         </div>
        <input disabled={state.submitting} className='bg-[#9D5151] mx-auto px-4 py-2 cursor-pointer text-white font-bold rounded-xl' type="submit" name='submit' placeholder='Submit' />
      </form>
     );
}
 
export default Contact;