import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const WhyCollege = () => {
  return (
    <div className="whycollege pt-5 sm:pt-14 p-3 sm:p-5 flex justify-center">
    <div className="py-4 sm:py-10">
      <h1 className="font-semibold text-3xl my-4 sm:my-10">Why CollegeMate India?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
          <Card sx={{ maxWidth: 345, padding: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 100, objectFit: 'contain' }}
                image="https://univariety.s3.ap-south-1.amazonaws.com/img/personalised_bg.png"
                alt="Personalised Counselling"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Personalized Counseling
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  At Collegemate India, we understand that every student is unique. Our personalized counseling approach ensures that we tailor our recommendations based on individual needs, career goals, and academic backgrounds.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345, padding: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 100, objectFit: 'contain' }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5a-xeQkTvNDxjRjArUDyCMypPwKVnJJ3Qw&s"
                alt="Expert Guidance"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Expert Guidance
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Our team of experienced counselors is well-versed in the admission processes of various colleges across India. We provide expert guidance on choosing the right college and course, application procedures, and preparing for entrance exams.                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345, padding: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 100, objectFit: 'contain' }}
                image="https://t3.ftcdn.net/jpg/08/01/46/48/360_F_801464861_E8kK1rR7KdEsUv1oW18HbQxcfb5Fp8ag.jpg"
                alt="Comprehensive Support"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Comprehensive Support
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  From selecting the right colleges and courses to handling application paperwork and interview preparation, we offer end-to-end support to make the admission process smooth and stress-free.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345, padding: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 100, objectFit: 'contain' }}
                image="https://cdn-icons-png.flaticon.com/512/3985/3985098.png"
                alt="Extensive Network"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Extensive Network
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  We have strong connections with a wide range of colleges and universities. This network allows us to provide you with the most accurate and up-to-date information, as well as access to exclusive opportunities.                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </div>
      </div>
    </div>
  );
}

export default WhyCollege;