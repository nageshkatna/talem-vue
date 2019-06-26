const express = require('express');
const router = express.Router();
const multer = require('multer');
// const csv = require('fast-csv');
const readXlsxFile = require('read-excel-file/node');

//upload Model

const upload = require('../../models/csvData');
const fs = require('fs');

const uploadFile = multer({ dest: 'tmp/csv/' });
// @route post api/upload
// @desc upload the CSV file
// @access Public

router.post('/', uploadFile.single('file'),  (req,res)=>{
    // File path.
    readXlsxFile(fs.createReadStream(req.file.path)).then((rows) => {
        //reading the CSV file
        for(var i=1;i<rows.length;i++){
            var j= 0
            upload.create({id : rows[i][j] , name:rows[i][j+1] , injury:rows[i][j+2]})
        }
        res.status(200).send('ok');
    })
});

module.exports = router;

