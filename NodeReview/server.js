const express = require('express');
const app = express();
const hbs = require('hbs');

// Cấu hình Express để sử dụng hbs làm view engine
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended:false}))

// Đường dẫn tới các file tĩnh như css, js, hình ảnh
app.use(express.static(__dirname + '/public'));

// Định nghĩa route cho trang chủ
app.get('/', (req, res) => {
  res.render('index', { title: 'Trang chủ' });
});

// Định nghĩa route cho trang về chúng tôi
app.get('/about', (req, res) => {
  res.render('about', { title: 'Về chúng tôi' });
});

// ...
// Định nghĩa route cho trang help
app.get('/help', (req, res) => {
    res.render('help', { title: 'Trang Help' });
  });
  
  // Xử lý dữ liệu khi nhận submit từ trang help
  app.post('/thankyou', (req, res) => {
    const email = req.body.email;
    res.render('thankyou', { title: 'Trang Thank You', email: email });
  });

  

// Khởi chạy server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Server đang chạy tại http://localhost:3000/');
});
