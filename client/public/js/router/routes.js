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
app.root('/', (req,res)=>{
    res.render('main')
})