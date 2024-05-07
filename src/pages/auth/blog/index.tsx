import { Breadcrumbs, Button, Card, Grid, Stack, Typography } from "@mui/material";
import { BreadcrumbsSeparator } from "src/components/breadcrumbs-separator";
import { AuthLayout } from "src/layouts/auth/auth-layout";
import { PostCard } from "src/layouts/dashboard/post-card";


export interface Post {
    id: string;
    author: {
      avatar: string;
      name: string;
    };
    category: string;
    content?: string;
    cover: string;
    publishedAt: number;
    readTime: string;
    shortDescription: string;
    title: string;
}

export const posts: Array<Post> = [
    {
      id: '24b76cac9a128cd949747080',
      author: {
        avatar: '/assets/avatars/avatar-jie-yan-song.png',
        name: 'Jie Yan Song',
      },
      category: 'Programming',
      cover: '/assets/covers/business-2-4x4-large.png',
      publishedAt: 446464646,
      readTime: '5 min',
      shortDescription:
        'Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh.',
      title: 'Why I Still Lisp, and You Should Too',
    },
    {
      id: 'a9c19d0caf2ca91020aacd1f',
      author: {
        avatar: '/assets/avatars/avatar-omar-darboe.png',
        name: 'Omar Darobe',
      },
      category: 'Productivity',
      cover: '/assets/covers/abstract-2-4x4-large.png',
      publishedAt: 446464646,
      readTime: '6 min',
      shortDescription:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      title: 'Scrum Has Hit the Glass Ceiling',
    },
    {
      id: '44df90cbf89963b8aa625c7d',
      author: {
        avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
        name: 'Siegbert Gottfried',
      },
      category: 'Entrepreneurs',
      cover: '/assets/covers/minimal-2-4x4-large.png',
      publishedAt: 446464646,
      readTime: '3 min',
      shortDescription:
        'Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea dictumst.',
      title: 'How Model View Controller (MVC) Architectures Work',
    },
    {
      id: 'c597c300fe3f817c41a2f01d',
      author: {
        avatar: '/assets/avatars/avatar-iulia-albu.png',
        name: 'Iulia Albu',
      },
      category: 'Innovation',
      cover: '/assets/covers/minimal-1-4x4-large.png',
      publishedAt: 446464646,
      readTime: '1 min',
      shortDescription:
        'Phasellus eu commodo lacus, eget tristique nunc. Ut ullamcorper semper nunc sit amet vehicula.',
      title: 'Generating Passive Income Is Hard, Here Is a Better Option',
    },
];

  
function Page(){

    return (
        <>
            <Grid container sx = {{ mt : 4 }}>
                <Stack >
                    <Breadcrumbs separator={<BreadcrumbsSeparator />}>


                    </Breadcrumbs>
                </Stack>

                <Grid item xs={2}>
                    <Typography variant="h3">Posts</Typography>

                </Grid>

                <Grid item xs={6}>
                    <Button
                        href="/"
                        variant="contained"
                        >
                        New Post
                    </Button>

                </Grid>
            </Grid>

            <Grid
                container
                sx={{mt:4}}

            >
                {posts.map((post , index) => (
                    <Grid
                        item
                        key={index}
                        sx={{p:1}}
                        xs={12}
                        md={6}
                    >
                        <PostCard
                            authorAvatar={post.author.avatar}
                            authorName={post.author.name}
                            category={post.category}
                            cover={post.cover}
                            publishedAt={post.publishedAt}
                            readTime={post.readTime}
                            shortDescription={post.shortDescription}
                            title={post.title}
                            sx={{ height: '100%' }}
                        />
                    </Grid>
                ))}

            </Grid>

        </>
    )
}

Page.getLayout = (page : any) : any => <AuthLayout>{page}</AuthLayout>;


export default Page;