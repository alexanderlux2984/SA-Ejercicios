import {getRol} from '../config/mysql.js'

export const ping = async(req, res) => {
  try {

    const resp = await getRol();
    console.log(resp);
    
    return res.status(200).json({ 
      status: true,
      msg:"succesfully",
      data:resp
  });


  } catch (error) {

    console.error(error.message);
    return res.status(500).json({  
        status: false,
        msg: error.message,
        data:{}  
    });

  }
}
  
  