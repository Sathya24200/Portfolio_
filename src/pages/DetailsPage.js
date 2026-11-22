import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, Database, Wrench, Briefcase } from 'lucide-react';

const DetailsPage = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        let ticking = false;
        let lastScrollY = 0;
        let currentScrollY = 0;

        const handleScroll = () => {
            currentScrollY = window.scrollY;

            if (!ticking) {
                requestAnimationFrame(() => {
                    const interpolatedY = lastScrollY + (currentScrollY - lastScrollY) * 0.8;

                    setIsScrolled(currentScrollY > 50);
                    setScrollY(interpolatedY);

                    document.documentElement.style.setProperty('--scroll-y', interpolatedY + 'px');

                    lastScrollY = interpolatedY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(el => {
            observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        let animationFrameId;
        let mouseX = 0;
        let mouseY = 0;
        let currentMouseX = 0;
        let currentMouseY = 0;

        const handleMouseMove = (e) => {
            currentMouseX = e.clientX;
            currentMouseY = e.clientY;

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            animationFrameId = requestAnimationFrame(() => {
                mouseX = mouseX + (currentMouseX - mouseX) * 0.1;
                mouseY = mouseY + (currentMouseY - mouseY) * 0.1;

                document.documentElement.style.setProperty('--mouse-x', mouseX + 'px');
                document.documentElement.style.setProperty('--mouse-y', mouseY + 'px');
            });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    const skills = {
        dataAI: ['Python', 'Swift', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'Human-in-the-Loop AI', 'Predictive Modeling'],
        webPlatforms: ['SwiftUI', 'Xcode', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs', 'Data Pipelines', 'Workflow Automation'],
        toolsDatabases: ['MongoDB', 'MySQL', 'SQLite', 'Git', 'GitHub', 'Linux', 'VS Code', 'Figma', 'CATIA', 'Siemens NX', 'AutoCAD']
    };

    const experience = [
        {
            title: 'Data Science Intern',
            company: 'Sangam Soft Solutions',
            duration: '2025',
            description: 'Engineered automated Python and Pandas data preprocessing, validation, and feature-engineering pipelines across business datasets to surface reliable, shared operational metrics.',
            skills: ['Python', 'Pandas', 'Predictive Modeling', 'Data Pipelines', 'Feature Engineering'],
            achievements: [
                'Engineered automated Python and Pandas data preprocessing and validation pipelines',
                'Surfaced reliable, shared operational metrics across business datasets',
                'Developed baseline predictive ML models and automated visual evaluation reports to support data-driven decisions'
            ]
        },
        {
            title: 'Trainee Design Engineer',
            company: 'Hirotec India (MNC)',
            duration: '2023 – 2024 (1 Year)',
            description: 'Designed industrial components and assemblies adhering to strict OEM engineering standards and quality validation workflows.',
            skills: ['CATIA', 'Siemens NX', 'OEM Standards', 'Quality Validation', 'Cross-functional Collaboration'],
            achievements: [
                'Designed industrial components and assemblies adhering to strict OEM engineering standards',
                'Maintained rigorous quality validation workflows and standardized technical documentation',
                'Collaborated across cross-functional engineering teams to streamline deliverables and production workflows'
            ]
        },
        {
            title: 'IoT & Design Thinking Trainee',
            company: 'Regional Science Centre',
            duration: '14 Weeks Training',
            description: 'Built rapid hardware-software prototypes integrating microcontrollers, sensor data acquisition, and iterative systems design.',
            skills: ['Microcontrollers', 'Embedded C', 'Sensor Data Acquisition', 'Hardware Prototyping', 'Systems Design'],
            achievements: [
                'Built rapid hardware-software prototypes integrating microcontrollers and sensors',
                'Implemented sensor data acquisition and iterative systems design methodology',
                'Applied design thinking principles to solve real-world automation challenges'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute w-64 h-64 md:w-96 md:h-96 bg-gray-100 rounded-full blur-3xl opacity-60 parallax-bg-1"
                    style={{
                        top: '10%',
                        left: '5%'
                    }}
                />
                <div
                    className="absolute w-64 h-64 md:w-96 md:h-96 bg-gray-50 rounded-full blur-3xl opacity-60 parallax-bg-2"
                    style={{
                        bottom: '10%',
                        right: '5%'
                    }}
                />
                <div
                    className="absolute w-32 h-32 md:w-48 md:h-48 bg-blue-100 rounded-full blur-2xl opacity-40 parallax-bg-3"
                    style={{
                        top: '30%',
                        right: '10%'
                    }}
                />
            </div>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Button onClick={() => navigate('/')} variant="ghost" className="flex items-center gap-2 hover:bg-gray-100">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">Back to Home</span>
                            <span className="sm:hidden">Back</span>
                        </Button>
                        <div className="text-xl font-semibold text-black">SR</div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-4 sm:mb-6 animate-fade-in-up">
                        Skills & Experience
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        A comprehensive overview of my technical expertise and professional journey
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12 fade-in-section">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-3 sm:mb-4">Technical Skills</h2>
                        <p className="text-sm sm:text-base text-gray-600">Technologies and tools I work with</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-section bg-white group">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 sm:p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                                        <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl">Data & AI</CardTitle>
                                </div>
                                <CardDescription className="text-sm sm:text-base">Core data science and machine learning skills</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.dataAI.map((skill, idx) => (
                                        <Badge key={idx} variant="secondary" className="text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all hover:scale-105">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-section bg-white group" style={{ animationDelay: '0.1s' }}>
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 sm:p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                                        <Database className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl">Platforms & Web</CardTitle>
                                </div>
                                <CardDescription className="text-sm sm:text-base">Platforms, frameworks, and web technologies</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.webPlatforms.map((skill, idx) => (
                                        <Badge key={idx} variant="secondary" className="text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all hover:scale-105">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-section bg-white group" style={{ animationDelay: '0.2s' }}>
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 sm:p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                                        <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl">Databases & Tools</CardTitle>
                                </div>
                                <CardDescription className="text-sm sm:text-base">Databases, developer tools, and engineering software</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.toolsDatabases.map((skill, idx) => (
                                        <Badge key={idx} variant="secondary" className="text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all hover:scale-105">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12 fade-in-section">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-3 sm:mb-4">Professional Experience</h2>
                        <p className="text-sm sm:text-base text-gray-600">My journey in the tech industry</p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                        {experience.map((exp, idx) => (
                            <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 fade-in-section group" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                                                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </div>
                                                <CardTitle className="text-lg sm:text-xl md:text-2xl">{exp.title}</CardTitle>
                                            </div>
                                            <CardDescription className="text-sm sm:text-base md:text-lg text-gray-700 font-medium ml-0 sm:ml-11">
                                                {exp.company} • {exp.duration}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="ml-0 sm:ml-11">
                                    <p className="text-sm sm:text-base text-gray-600 mb-4">{exp.description}</p>
                                    <div className="mb-4">
                                        <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-600">
                                            {exp.achievements.map((achievement, achIdx) => (
                                                <li key={achIdx}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, skillIdx) => (
                                            <Badge key={skillIdx} variant="secondary" className="text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 transition-all hover:scale-105">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center fade-in-section">
                    <h3 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">Want to see my certifications?</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Explore my professional certifications and achievements</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button onClick={() => navigate('/certificates')} size="lg" className="bg-black hover:bg-gray-800 text-white transition-all hover:scale-105 w-full sm:w-auto">
                            View Certifications
                        </Button>
                        <Button onClick={() => navigate('/')} variant="outline" size="lg" className="border-black text-black hover:bg-gray-50 transition-all hover:scale-105 w-full sm:w-auto">
                            Back to Home
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-6 sm:py-8 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                            © 2025 Sathyamoorthy R. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DetailsPage;