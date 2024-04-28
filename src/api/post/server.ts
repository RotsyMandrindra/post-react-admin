import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

function getTotalPosts(): number {
 return 319;
}

function getPosts(start: number, limit: number): any[] {
 return []; 
}

const corsOptions = {
 exposedHeaders: ['Content-Range']
};

app.use(cors(corsOptions));

app.get('/api/posts', (req: Request, res: Response) => {
 const start = parseInt(req.query.start as string) || 0;
 const limit = parseInt(req.query.limit as string) || 10;
 const total = getTotalPosts();

 const posts = getPosts(start, limit);

 const contentRange = `posts ${start}-${start + posts.length - 1}/${total}`;

 res.setHeader('Content-Range', contentRange);

 res.setHeader('Access-Control-Expose-Headers', 'Content-Range');

 res.json(posts);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});
