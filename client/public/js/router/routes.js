const app = new Router()

app.use('/')
app.use('/signup')
app.use('/login')
app.use('/profile')
app.use('/post')
// binding root

app.bindRoot('app')

app.get('/', (req,res)=>{
    res.return()
    res.render('main')
    res.return()
})
app.on('/', (req,res)=>{
    res.render('main')
})
app.get('/login', (req,res)=>{
  res.return()
  res.render('login')
  res.return()
})
app.on('/login', (req,res)=>{
  res.return()
  res.render('login')
  res.return()
})
app.get('/register', (req,res)=>{
  res.return()
  res.render('register')
  res.return()
})
app.on('/register', (req,res)=>{
  res.return()
  res.render('register')
  res.return()
})
app.root('/', (req,res)=>{
    res.render('main')
})
