import { ArrowRight, ExternalLink, Mail, Phone, Globe } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { motion, type MotionProps } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  certificate,
  contactLinks,
  education,
  experience,
  languages,
  militaryService,
  profile,
  projects,
  sectionOrder,
  skillGroups,
  softSkills,
} from '@/content/resume';

const navLinks = sectionOrder.map((section) => ({
  label: section,
  href: `#${section.toLowerCase().replace(/\s+/g, '-')}`,
}));

const fadeIn = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Badge variant="outline" className="tracking-eyebrow">
        {eyebrow}
      </Badge>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-sm text-muted-foreground">{description}</p> : null}
    </div>
  );
}

export default function Home() {
  const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim();
  const [submitState, setSubmitState] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!contactEndpoint) {
      setSubmitState('error');
      setSubmitMessage(
        'Set VITE_CONTACT_FORM_ENDPOINT to your form provider endpoint before using this form.'
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const subject = String(formData.get('subject') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const notes = String(formData.get('notes') ?? '').trim();

    if (!subject || !email || !notes) {
      setSubmitState('error');
      setSubmitMessage('Please fill in subject, email, and notes.');
      return;
    }

    setSubmitState('sending');
    setSubmitMessage('');

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject,
          email,
          notes,
          name: profile.name,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      form.reset();
      setSubmitState('success');
      setSubmitMessage('Message sent. I will reply by email.');
    } catch (error) {
      setSubmitState('error');
      setSubmitMessage(
        error instanceof Error ? error.message : 'Failed to send the message.'
      );
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border bg-card/75 backdrop-blur supports-backdrop-filter:bg-card/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <a href="#top" className="text-lg font-semibold tracking-tight transition hover:text-primary">
            {profile.name}
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className="text-muted-foreground transition hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm">
            <a href="#contact">
              Contact
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-10 md:px-6 md:py-14">
        <motion.section
          className="grid gap-8 lg:grid-cols-1"
          style={{ gridTemplateColumns: '1.2fr 0.8fr' }}
          {...fadeIn()}
        >
          <div className="space-y-6">
            <Badge variant="primary" className="gap-2 tracking-eyebrow">
              Available for work
            </Badge>
            <div className="space-y-3">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                {profile.name}
              </h1>
              <p className="text-xl text-muted-foreground">{profile.title}</p>
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">
                  View resume highlights
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:arrkpong1@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/arrkpong" target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <Card className="border-primary/15 bg-card/80">
            <CardHeader>
              <CardDescription className="uppercase tracking-eyebrow">Contact</CardDescription>
              <CardTitle>Reach me directly</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 transition hover:border-primary/40 hover:bg-muted/30"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{label}</span>
                </a>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        <motion.section id="summary" className="grid gap-6 lg:grid-cols-2" {...fadeIn(0.05)}>
          <Card className="rounded-3xl border-border/70">
            <CardHeader>
              <Badge variant="outline" className="tracking-eyebrow">
                Summary
              </Badge>
              <CardTitle>Professional summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>{profile.summary}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-muted/30 p-4">
                  <p className="text-xs uppercase tracking-eyebrow text-muted-foreground">Role</p>
                  <p className="mt-2 font-medium text-foreground">{profile.title}</p>
                </div>
                <div className="rounded-2xl border border-border bg-muted/30 p-4">
                  <p className="text-xs uppercase tracking-eyebrow text-muted-foreground">Focus</p>
                  <p className="mt-2 font-medium text-foreground">Frontend + Backend delivery</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border/70">
            <CardHeader>
              <Badge variant="outline" className="tracking-eyebrow">
                Languages
              </Badge>
              <CardTitle>Communication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {languages.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-muted/30 p-4 text-sm">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        <motion.section id="skills" className="space-y-6" {...fadeIn(0.1)}>
          <SectionHeading
            eyebrow="Skills"
            title="Technical skills"
            description="Tools and technologies pulled directly from the resume."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <Card key={title} className="rounded-3xl border-border/70">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <CardDescription className="uppercase tracking-eyebrow">
                      {title}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-3xl border-border/70">
            <CardHeader>
              <Badge variant="outline" className="tracking-eyebrow">
                Soft skills
              </Badge>
              <CardTitle>Transferable strengths</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="default">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        <motion.section id="experience" className="space-y-6" {...fadeIn(0.15)}>
          <SectionHeading
            eyebrow="Experience"
            title="Work experience"
            description="Recent roles and impact, summarized from the resume."
          />
          <div className="space-y-4">
            {experience.map((item) => (
              <Card key={item.project} className="rounded-3xl border-border/70">
                <CardHeader>
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <Badge variant="primary" className="tracking-eyebrow">
                        {item.role}
                      </Badge>
                      <CardTitle className="mt-3">{item.project}</CardTitle>
                      <CardDescription className="mt-2">
                        {item.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{item.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {item.highlights.map((point) => (
                      <li key={point} className="rounded-2xl border border-border bg-muted/25 p-4">
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="space-y-6" {...fadeIn(0.2)}>
          <SectionHeading
            eyebrow="Projects"
            title="Selected projects"
            description="Projects listed in the resume, presented as concise case notes."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="rounded-3xl border-border/70">
                <CardHeader>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit">
                      {project.year}
                    </Badge>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {project.highlights.map((point) => (
                      <li key={point} className="rounded-2xl border border-border bg-muted/25 p-4">
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section id="military-service" className="space-y-6" {...fadeIn(0.25)}>
          <SectionHeading
            eyebrow="Military Service"
            title="Service background"
            description="Included because it is part of the resume and shaped the way I work."
          />
          <Card className="rounded-3xl border-border/70">
            <CardHeader>
              <Badge variant="outline" className="w-fit">
                {militaryService.period}
              </Badge>
              <CardTitle>{militaryService.location}</CardTitle>
              <CardDescription>{militaryService.rank}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              {militaryService.summary.map((point) => (
                <p key={point} className="rounded-2xl border border-border bg-muted/25 p-4">
                  {point}
                </p>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        <motion.section id="education" className="space-y-6" {...fadeIn(0.3)}>
          <SectionHeading
            eyebrow="Education"
            title="Academic background"
            description="Education and certificate information from the resume."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="rounded-3xl border-border/70">
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  {education.period}
                </Badge>
                <CardTitle>{education.school}</CardTitle>
                <CardDescription>{education.degree}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {education.faculty}
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/70">
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  {certificate.year}
                </Badge>
                <CardTitle>Certificate</CardTitle>
                <CardDescription>{certificate.issuer}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {certificate.title}
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section id="contact" className="grid gap-6 lg:grid-cols-2" {...fadeIn(0.35)}>
          <Card className="rounded-3xl border-border/70">
            <CardHeader>
              <Badge variant="outline" className="tracking-eyebrow">
                Contact
              </Badge>
              <CardTitle>Get in touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <a href="mailto:arrkpong1@gmail.com" className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                arrkpong1@gmail.com
              </a>
              <a href="tel:+660626103571" className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                062-610-3571
              </a>
              <a href="https://github.com/arrkpong" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-4 w-4 text-primary" />
                github.com/arrkpong
              </a>
            </CardContent>
          </Card>

          <form className="space-y-4 rounded-3xl border border-border bg-card/70 p-6 shadow-sm" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-semibold uppercase tracking-eyebrow text-muted-foreground">
                Subject
              </label>
              <Input name="subject" placeholder="Project, role, or collaboration" className="mt-2" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-eyebrow text-muted-foreground">
                Email
              </label>
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-eyebrow text-muted-foreground">
                Notes
              </label>
              <Textarea
                name="notes"
                rows={5}
                placeholder="Tell me what you're building..."
                className="mt-2"
              />
            </div>
            <Button type="submit" className="w-full" disabled={submitState === 'sending'}>
              {submitState === 'sending' ? 'Sending...' : 'Send message'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {submitMessage ? (
              <p
                className={
                  submitState === 'error'
                    ? 'text-sm text-red-600'
                    : 'text-sm text-emerald-700'
                }
              >
                {submitMessage}
              </p>
            ) : null}
            {!contactEndpoint ? (
              <p className="text-xs text-muted-foreground">
                Add `VITE_CONTACT_FORM_ENDPOINT` in `.env` to enable real email delivery.
              </p>
            ) : null}
          </form>
        </motion.section>
      </main>

      <footer className="border-t border-border bg-card/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
          <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          <p>Built from resume.txt.</p>
        </div>
      </footer>
    </div>
  );
}

