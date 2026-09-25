import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Chip,
  Divider,
  Alert,
  InputAdornment,
} from '@mui/material';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import emailjs from '@emailjs/browser';
import '../contact/contact.css';

const contactDetails = {
  address:
    '93, Eross Society, Shri Krushna Nagar, Behind Vidarbha Furniture, Nagpur - 440030',
  phone: '+91 8087474953',
  email: 'info@infodales.com',
};

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  consent: false,
};

function MapHero() {
  return (
    <Box component="section" className="contact-hero">
      <svg
        className="map-canvas"
        viewBox="0 0 1600 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mapBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#080f1d" />
            <stop offset="55%" stopColor="#101d34" />
            <stop offset="100%" stopColor="#172844" />
          </linearGradient>

          <radialGradient id="locationGlow">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity=".6" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1600" height="700" fill="url(#mapBg)" />

        {/* Map grid */}
        <g stroke="#344866" strokeWidth="2" opacity=".45">
          {Array.from({ length: 13 }, (_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 60}
              x2="1600"
              y2={i * 60 + 35}
            />
          ))}

          {Array.from({ length: 18 }, (_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 100}
              y1="0"
              x2={i * 100 + 100}
              y2="700"
            />
          ))}
        </g>

        {/* Map blocks */}
        <g fill="#1b2e4a" opacity=".85">
          <rect x="180" y="100" width="110" height="54" rx="8" />
          <rect x="330" y="180" width="145" height="65" rx="8" />
          <rect x="540" y="90" width="100" height="75" rx="8" />
          <rect x="980" y="420" width="150" height="75" rx="8" />
          <rect x="1190" y="310" width="125" height="65" rx="8" />
          <rect x="700" y="500" width="170" height="65" rx="8" />
        </g>

        {/* Map routes */}
        <g fill="none" stroke="#3b82f6" strokeLinecap="round">
          <path
            d="M0 390 C300 330 480 420 700 320 S1120 180 1600 260"
            strokeWidth="5"
            opacity=".8"
          />

          <path
            d="M250 0 C350 180 450 360 650 700"
            strokeWidth="3"
            opacity=".6"
          />

          <path
            d="M1100 0 C980 220 1220 430 1380 700"
            strokeWidth="3"
            opacity=".45"
          />
        </g>

        {/* Location glow moves upward with the marker */}
        <circle
          cx="800"
          cy="260"
          r="150"
          fill="url(#locationGlow)"
        />

        {/* Animated dotted ring */}
        <circle
          className="map-dotted-ring"
          cx="800"
          cy="260"
          r="65"
          fill="none"
          stroke="#60a5fa"
          strokeDasharray="5 8"
          strokeWidth="2"
          opacity=".85"
        />

        {/* Stationary location pin */}
        <g transform="translate(800 260)">
          <path
            d="M0 12 C-15 -7 -26 -20 -26 -38 A26 26 0 1 1 26 -38 C26 -20 15 -7 0 12Z"
            fill="#2563eb"
            stroke="#bfdbfe"
            strokeWidth="2"
          />

          <circle cy="-38" r="9" fill="#fff" />
        </g>

        <text
          x="120"
          y="580"
          fill="#64748b"
          fontSize="18"
          fontWeight="700"
          letterSpacing="3"
        >
          NAGPUR · MAHARASHTRA
        </text>
      </svg>

      <Box className="hero-vignette" />

      <Container maxWidth="xl" className="hero-content">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={2}
        >
          <Chip
            icon={<LocationOnOutlinedIcon />}
            label="Infodales · Nagpur, India"
            className="hero-location-chip"
          />

          <Chip
            label="Connect with our team"
            className="hero-status-chip"
          />
        </Stack>

        <Box className="hero-heading">
          <Typography className="hero-eyebrow">
            CONTACT INFODALES
          </Typography>

          <Typography component="h1" className="hero-title">
            Let’s Start a Conversation
          </Typography>

          <Typography className="hero-description">
            Have a project in mind or need expert guidance? Reach out to our
            team. We’re here to understand your goals and help you move
            forward.
          </Typography>
        </Box>

        <Box className="hero-bottom-label">
          <LocationOnOutlinedIcon />

          <Typography>
            Shri Krushna Nagar, Nagpur, Maharashtra
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function ContactCard({ icon, label, title, description, action, href }) {
  return (
    <Paper elevation={0} className="contact-card">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
        mb={2.5}
      >
        <Box className="contact-card-icon">{icon}</Box>

        <Chip
          size="small"
          label={label}
          className="contact-card-chip"
        />
      </Stack>

      <Typography className="contact-card-title">
        {title}
      </Typography>

      <Typography className="contact-card-description">
        {description}
      </Typography>

      <Button
        component="a"
        href={href}
        variant="outlined"
        endIcon={<NearMeOutlinedIcon />}
        className="contact-card-action"
        fullWidth
      >
        {action}
      </Button>
    </Paper>
  );
}

function InquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const updateField = (event) => {
    const { name, value, checked, type } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.firstName.trim()) {
      nextErrors.firstName = 'Enter your first name.';
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = 'Enter your last name.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Enter your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (form.message.trim().length < 20) {
      nextErrors.message = 'Please enter at least 20 characters.';
    }

    if (!form.consent) {
      nextErrors.consent = 'Please accept the privacy consent.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  setSubmitted(false);
  setSubmitError('');

  if (!validate()) return;

  setLoading(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phone: form.phone || 'Not provided',
        message: form.message,
      },
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    );

    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  } catch (error) {
    console.error(error);
    setSubmitError('Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
};

 const fieldProps = {
    fullWidth: true,
    size: 'medium',
    variant: 'outlined',
    onChange: updateField,
  };


  return (
    <Box className="inquiry-section">
      <Box className="inquiry-heading">
        <Typography component="h2" className="section-title">
          Send Us an Inquiry
        </Typography>

        <Typography className="section-description">
          Tell us a little about your requirements. Our team will review your
          message and get in touch.
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              {...fieldProps}
              label="First Name"
              name="firstName"
              value={form.firstName}
              required
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
              placeholder="Jane"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              {...fieldProps}
              label="Last Name"
              name="lastName"
              value={form.lastName}
              required
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
              placeholder="Doe"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              {...fieldProps}
              label="Work Email"
              name="email"
              type="email"
              value={form.email}
              required
              error={Boolean(errors.email)}
              helperText={errors.email}
              placeholder="jane@company.com"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              {...fieldProps}
              label="Phone Number"
              name="phone"
              type="tel"
              value={form.phone}
              placeholder="+91"

              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneOutlinedIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              {...fieldProps}
              label="Detailed Message"
              name="message"
              value={form.message}
              required
              multiline
              minRows={5}
              error={Boolean(errors.message)}
              helperText={
                errors.message || `${form.message.length} characters`
              }
              placeholder="Tell us about your project, goals, timeline, or requirements..."
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="consent"
                  checked={form.consent}
                  onChange={updateField}
                  color="primary"
                />
              }
              label={
                <Typography className="consent-label">
                  I agree to the privacy policy and consent to Infodales
                  using my information to respond to this inquiry.
                </Typography>
              }
            />

            {errors.consent && (
              <Typography className="field-error">
                {errors.consent}
              </Typography>
            )}
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretch', sm: 'center' }}
              justifyContent="space-between"
              spacing={2}
            >
              <Typography className="form-note">
                Fields marked * are required.
              </Typography>

              <Button
                type="submit"
                variant="contained"
                endIcon={<SendOutlinedIcon />}
                className="submit-button"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Inquiry'}
              </Button>
            </Stack>
          </Grid>

          {submitted && (
            <Grid size={{ xs: 12 }}>
              <Alert severity="success">
                Thank you! Your inquiry has been sent successfully.
      Our team will get in touch with you.
              </Alert>
            </Grid>
          )}
          {submitError && (
  <Grid size={{ xs: 12 }}>
    <Alert severity="error">
      {submitError}
    </Alert>
  </Grid>
)}
        </Grid>
      </Box>
    </Box>
  );
}

export default function ContactPage() {
  return (
    <Box className="contact-page">
      <MapHero />

      <Container maxWidth="xl" className="contact-overlap">
        <Paper elevation={0} className="contact-main-panel">
          <Grid container spacing={2.5} className="contact-cards">
            <Grid size={{ xs: 12, md: 4 }}>
              <ContactCard
                icon={<BusinessOutlinedIcon />}
                label="Our Office"
                title="Visit Infodales"
                description={contactDetails.address}
                action="Get Directions"
                href="https://www.google.com/maps/search/?api=1&query=93+Eross+Society+Shri+Krushna+Nagar+Nagpur"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <ContactCard
                icon={<PhoneInTalkOutlinedIcon />}
                label="Call Us"
                title="Speak with Our Team"
                description={contactDetails.phone}
                action="Call Infodales"
                href="tel:+918087474953"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <ContactCard
                icon={<MarkEmailReadOutlinedIcon />}
                label="Email Us"
                title="General Inquiries"
                description={contactDetails.email}
                action="Send an Email"
               href="https://mail.google.com/mail/?view=cm&fs=1&to=info@infodales.com"
              />
            </Grid>
          </Grid>

          <Divider className="panel-divider" />

          <InquiryForm />
        </Paper>
      </Container>

      <Container maxWidth="xl" className="facility-section">
        <Paper elevation={0} className="facility-panel">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack direction="row" spacing={2}>
                <Box className="facility-icon">
                  <ScheduleOutlinedIcon />
                </Box>

                <Box>
                  <Typography className="facility-title">
                    Business Hours
                  </Typography>

                  <Typography className="facility-description">
                    Contact our team during business hours. Please reach out
                    to confirm availability before visiting.
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Stack direction="row" spacing={2}>
                <Box className="facility-icon">
                  <BadgeOutlinedIcon />
                </Box>

                <Box>
                  <Typography className="facility-title">
                    Office Visits
                  </Typography>

                  <Typography className="facility-description">
                    Planning to visit? Contact us in advance so our team can
                    coordinate your appointment.
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Stack direction="row" spacing={2}>
                <Box className="facility-icon">
                  <ExploreOutlinedIcon />
                </Box>

                <Box>
                  <Typography className="facility-title">
                    Find Our Office
                  </Typography>

                  <Typography className="facility-description">
                    93, Eross Society, Shri Krushna Nagar, Behind Vidarbha
                    Furniture, Nagpur - 440030.
                  </Typography>

                  <Button
                    component="a"
                    href="https://www.google.com/maps/search/?api=1&query=93+Eross+Society+Shri+Krushna+Nagar+Nagpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                    endIcon={<NearMeOutlinedIcon />}
                  >
                    Open in Google Maps
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}