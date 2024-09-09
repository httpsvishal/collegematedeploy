import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CollegeData from "../assets/collegeData.json";

const Courses = () => {
    function countColleges({name}) {
        let count = 0;
        CollegeData.forEach(college => {
            const hasCourse = college.courses.some(course => 
                course.name === name
            );
            if (hasCourse) {
                count++;
            }
        });
    
        return count;
    }
    return (
        <div className="courses pt-14 pt-10 p-3 sm:p-5 flex justify-center  ">
            <div className="py-14">
                <h1 className="font-semibold text-3xl my-14">Discover your career path</h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                    <Card sx={{ maxWidth: 345, padding: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 60, objectFit: 'contain' }}
                                image="https://www.shareicon.net/data/512x512/2015/09/20/643701_computer_512x512.png"
                                alt="B.Tech / B.E."
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    B.Tech / B.E.
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {countColleges({ name: "B.E / B.Tech" })} colleges offer B.Tech / B.E. courses
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, padding: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 60, objectFit: 'contain' }}
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigOGIWp2aR_Jl-In6nOwdZY1wokZYeOeelg&s"
                                alt="BBA"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    BBA
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {countColleges({ name: "BBA" })} colleges offer BBA courses
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, padding: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 60, objectFit: 'contain' }}
                                image="https://image.similarpng.com/very-thumbnail/2021/06/Law-labels-icon-on-transparent-PNG.png"
                                alt="Law"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Law
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {countColleges({ name: "B.A. LL.B.(Hons)" })} colleges offer Law courses
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, padding: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 60, objectFit: 'contain' }}
                                image="https://cdn-icons-png.flaticon.com/256/2022/2022299.png"
                                alt="B.Sc"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    B.Sc
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {countColleges({ name: "B.Sc" })} colleges offer B.Sc courses
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, padding: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 60, objectFit: 'contain' }}
                                image="https://www.shutterstock.com/image-vector/graduation-cap-diploma-black-web-600nw-156398897.jpg"
                                alt="BA"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bachelor of Arts
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {countColleges({ name: "B.A." })} colleges offer BA courses
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, padding: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 60, objectFit: 'contain' }}
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5qqIob8xLAUHe-NDGa2IyTQg8RBP5blQaA&s"
                                alt="MBA"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    MBA
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {countColleges({ name: "MBA" })} colleges offer MBA courses
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, padding: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 60, objectFit: 'contain' }}
                                image="https://w7.pngwing.com/pngs/108/279/png-transparent-blue-capsule-computer-icons-font-awesome-tablet-pharma-electronics-logo-pharmaceutical-drug-thumbnail.png"
                                alt="B.Pharm"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    B.Pharm
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {countColleges({ name: "B.Pharm" })} colleges offer B.Pharm courses
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, padding: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 60, objectFit: 'contain' }}
                                image="https://st2.depositphotos.com/4520249/7558/v/450/depositphotos_75585529-stock-illustration-convocation-degree-graduation-icon.jpg"
                                alt="M.Sc"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    M.Sc
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {countColleges({ name: "M.Sc." })} colleges offer M.Sc courses
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Courses;