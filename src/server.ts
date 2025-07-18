import createApp from './app'; 

const port = process.env.PORT;

const app = createApp();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});