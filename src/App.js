import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import logo from './banner.JPEG';
// import logo2 from './avatar.jpg';
import avatar from './avatar.jpg'
import resume from './resume.pdf';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'GraphQL',
  'Material UI',
  'Ruby',
  'Python',
  'HTML & CSS',
  'Rails',
  'Redux',
  'SQL',
  'NoSQL',
  'PostgreSQL',
  'MongoDB',
  'Node.JS',
  'Express',
  'Flask, Mocha & Chai',
  'Pytest',
  'Ubuntu',
  'Digital Ocean',
  'Heroku',
  'AWS',
  'Test Driven Development',
  'Agile Methodology',
  'Pair Programming',
  'Git Workflow',
  'Object Oriented Programming',
];

const prjs = [
  {
    id: 7,
    name: 'MediBlock',
    desc: 'Medical Tech platform aimed at improving medical identity, administrative processes, security and efficiency in the health care system. Multiple platforms built for iOS, desktop with React, AWS, Node.js and more.',
    img: 'https://i.ibb.co/31Hjqhp/irwan-blogcious-rb-DE93-0h-Hs-unsplash-modified-overlay.png',
    link: 'https://mediblock.online/',
  },
  {
    id: 2,
    name: 'Marin Referral Network',
    tags: ['react', 'firebase'],
    desc: 'Full Stack Application built with React, Firebase and Material UI. Over 50 users! This application helps a community referral group enter referrals for tracking as well as business earned and other activitives. This allows performance to be easily tracked from a clean informative dashboard',
    img: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/327449605_716704846564184_4461253604777728502_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=csvswYycBc4AX8EgP9n&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCy0TnY4ZHpUB0L7zQnQG_rAOfGksIVj0nlp7GnbyoE1A&oe=650019AB',
    link: 'https://mrn-tracking.netlify.app/',
  },
  {
    id: 5,
    name: 'Bridge Builders LA',
    desc: 'Fresh, modern update for Bridge Builders Foundation of Los Angeles. Bridge Builders is a non profit foundation providing programs like STEM mentorship, healthcare awareness and finanical literacy for youths in Los Angeles',
    img: 'https://www.bridgebuildersla.org/wp-content/uploads/5C4A9158-scaled-1-1620x1080.jpg',
    link: 'https://www.bridgebuildersla.org/',
  },
  {
    id: 1,
    name: 'Laura Larkin Interiors',
    tags: ['wix'],
    desc: 'Website built with Wix for interior designer based in the Bay Area, simple and functional site with beautiful pictures showcasing the designers portofolio.',
    img: 'https://static.wixstatic.com/media/3e25a3_e1aac6f4f09841bf9804f537c9bb0701~mv2.jpg/v1/crop/x_114,y_6,w_2470,h_1786/fill/w_940,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3e25a3_e1aac6f4f09841bf9804f537c9bb0701~mv2.jpg',
    link: 'https://www.lauralarkininteriors.com/',
  },

  {
    id: 3,
    name: 'Salon E Uptown',
    desc: 'Website built with Wix for Mobile Hair Stylist based in Marin County. Huge improvement on older site especially for mobile responsiveness. Her audience is now able to easily view her services and contact her for appointments.',
    img: 'https://static.wixstatic.com/media/44e423_88b75d777031432c8aeab450cb7efc2d~mv2.jpg/v1/fill/w_360,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_01%20(19)_pp_JPG.jpg',
    link: 'https://www.saloneuptown.com/',
  },
  {
    id: 4,
    name: 'Visions By Caitlin Lois Burnham',
    desc: 'Website built with Wix for blogger / fashion influencer Caitlin Burnham. Her website acts as a blog as well as a central location for all of her fashion tips, and referral sites',
    img: 'https://static.wixstatic.com/media/eb159b_17dc74ed956a4817bf3ddc5209531215~mv2.jpeg/v1/fill/w_1284,h_860,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eb159b_17dc74ed956a4817bf3ddc5209531215~mv2.jpeg',
    link: 'https://www.caitlinburnham.blog/',
  },

  {
    id: 6,
    name: 'Square',
    desc: 'Fun interactive front end site built along side students of my Intro to web development class, coding can be fun! This project was built with vanilla JavaScript, HTML and CSS, the purpose is to show the power of web development.',
    img: 'https://i.ibb.co/dg2cL7F/Screenshot-2023-09-08-at-3-46-40-PM.png',
    link: 'https://sqr.surge.sh/',
  },
];

const pages = [
  { name: 'Portfolio', href: '#portfolio', target: '' },
  // { name: 'Blog', href: '#portfolio', target: '' },
  { name: 'Resume', href: resume, target: '_blank' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [slide, setSlide] = useState(logo);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     setSlide(logo2);
  //   }, 5000);
  // });
  return (
    <>
      <AppBar
        sx={{
          backgroundImage: `url('https://images.freecreatives.com/wp-content/uploads/2015/04/blackorchid_@2X.jpg')`,
        }}
        position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              Carl Corsini
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}>
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  target={page.target}
                  href={page.href}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#ebebeb', display: 'block' }}>
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 0,
                flexDirection: 'row',
              }}>
              <Typography href="" sx={{ mr: 1 }}>
                LinkedIn
              </Typography>
              <Typography>GitHub</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div
        className="paralax"
        alt="logo"
        src={logo}
        style={{
          backgroundImage: `url(${logo})`,
          // zIndex: 0,
          // objectFit: 'cover',
          minHeight: 500,
          marginTop: 50,
          // width: '100%',
          // marginBottom: 0,
          // overflow: 'hidden',
        }}>
        <Grid container>
          <Grid item xs={1}>
            {' '}
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h4" sx={{ color: '#ebebeb', mt: 7 }}>
              Carl Corsini
            </Typography>
            <Typography variant="h6" sx={{ color: '#ebebeb' }}>
              Software Engineer
            </Typography>
          </Grid>
        </Grid>
      </div>

      <Container id="portfolio" sx={{ mt: 2, mb: 12 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={3} md={3}></Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Avatar style={{margin: 'auto', height: '250px', width: '250px', marginBottom: '12px'}} src={avatar}/>
              <Typography style={{ color: '#ebebeb', marginBottom: 12 }}>
                Full Stack Software Engineer who eats, sleeps, and breathes
                JavaScript. Passionate about creating enjoyable and life
                altering experiences through technology. Technically skilled
                programmer with advanced interpersonal skills from experience in
                management
              </Typography>
              <div style={{textAlign: 'center'}}>
              {skills.map((a) => (
                <Chip size="small" style={{ backgroundColor: '#ebebeb' }} sx={{margin: .5}} label={a} />
              ))}
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={3}></Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Divider sx={{ borderColor: '#ebebeb' }} light />
              <Typography
                variant="h3"
                sx={{ textAlign: 'center', mt: 2, mb: 2, color: '#ebebeb' }}>
                Portfolio
              </Typography>
              <Divider sx={{ borderColor: '#ebebeb' }} light />
            </Grid>
            {prjs.map((a) => (
              <Grid
                sx={{ display: 'flex', justifyContent: 'center' }}
                item
                xs={12}
                sm={4}
                md={4}>
                <Card
                  elevation={5}
                  sx={{
                    maxWidth: 345,
                    backgroundColor: '#181818',
                    color: '#ebebeb',
                  }}>
                  <CardMedia
                    sx={{ height: 250 }}
                    image={a.img}
                    title={a.name}
                  />
                  <CardContent sx={{ color: '#ebebeb' }}>
                    <Typography
                      sx={{ color: '#ebebeb' }}
                      gutterBottom
                      variant="h5"
                      component="div">
                      {a.name}
                    </Typography>
                    <Typography
                      sx={{ color: '#ebebeb' }}
                      variant="body2"
                      color="text.secondary">
                      {a.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{ color: '#ebebeb' }}
                      href={a.link}
                      target="_blank"
                      size="small">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {/* <Grid sx={{ display: 'flex' }} item xs={12} sm={4} md={4}>
                <Card
                  elevation={2}
                  sx={{
                    maxWidth: 345,
                    backgroundColor: '#181818',
                    color: '#ebebeb',
                  }}>
                  <CardMedia
                    sx={{ height: 250 }}
                    image={logo}
                    // title={a.name}
                  />
                  <CardContent sx={{ color: '#ebebeb' }}>
                    <Typography
                      sx={{ color: '#ebebeb' }}
                      gutterBottom
                      variant="h5"
                      component="div">
                      More!
                    </Typography>
                    <Typography
                      sx={{ color: '#ebebeb' }}
                      variant="body2"
                      color="text.secondary">
                      Please reach out to see more projects or maybe add yours to the list!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{ color: '#ebebeb' }}
                      // href={a.link}
                      target="_blank"
                      size="small">
                      Email
                    </Button>
                  </CardActions>
                </Card>
              </Grid> */}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default ResponsiveAppBar;
