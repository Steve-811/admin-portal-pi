const { db } = require("./util/admin");
const { uuid } = require('uuidv4');

exports.students = async (req, res) => {
    try {
      if(req.body?.roll_no &&
        req.body?.first_name &&
        req.body?.last_name &&
        req.body?.class &&
        req.body?.imageURL &&
        req.body?.is_active
         ) {
          await db.collection('students').doc(uuid())
            .create({
              "roll_no": req.body.roll_no,
              "first_name": req.body.first_name,
              "last_name": req.body.last_name,
              "class": req.body.class,
              "imageURL": req.body.imageURL,
              "is_active": req.body.is_active,
          });
          return res.status(200).send("Added Successfully");
         } else {
          throw new Error('Please Fill all values');
         }
        
      } catch (error) {
        console.log(error);
        return res.status(500).send('Something Went Wrong.'
                    + 'Please add following params to body {"roll_no": "123",'
                    +'"first_name": "abc",'
                    +'"last_name": "abc",'
                    +'"class": "abc",'
                    +'"is_active": 1}');
      }
};

exports.studentsList = async (req, res) => {
  const studentsRef = db.collection('students');
  try{
          studentsRef.get().then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
      }));
          console.log(data);
          return res.status(201).json(data);
      })
  } catch (error) {
      return res
      .status(500)
      .json({ general: "Something went wrong."});          
  }
};



