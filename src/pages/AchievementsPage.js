import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Award, Zap, Flame, Shield, ArrowRight, Star, GraduationCap } from 'lucide-react';

const AchievementsPage = () => {
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

    const hackathons = [
        {
            title: 'Smart India Hackathon (SIH)',
            organization: 'Ministry of Education & AICTE, Govt. of India',
            level: 'National Level',
            badge: 'National Innovation',
            icon: Trophy,
            description: 'Participated in the premier nationwide innovation initiative by the Government of India, solving pressing real-world technical and civic problem statements through cutting-edge software and automated engineering prototypes.',
            tags: ['AI Innovation', 'National Hackathon', 'Problem Solving']
        },
        {
            title: 'Archathon 3.0',
            organization: 'Government Engineering College (GEC), Thrissur',
            level: 'State Level',
            badge: 'Engineering Hackathon',
            icon: Zap,
            description: 'Competed in an intense multi-round engineering hackathon tackling algorithmic architecture, rapid prototyping, and end-to-end system design against competitive university teams.',
            tags: ['System Design', 'Algorithms', 'Rapid Prototyping']
        },
        {
            title: 'Code Redemption 24-hr Hackathon',
            organization: 'Jai Shriram Engineering College',
            level: '24-Hour Sprint',
            badge: 'Endurance Coding',
            icon: Flame,
            description: 'Engineered a working software prototype within an unbroken 24-hour development sprint, demonstrating disciplined teamwork, rapid debugging, and production-ready code delivery under pressure.',
            tags: ['24-Hr Hackathon', 'Rapid Prototyping', 'Full-Stack']
        },
        {
            title: 'Cybersecurity Symposium',
            organization: 'National Institute of Technology (NIT Trichy)',
            level: 'National Symposium',
            badge: 'NIT Trichy',
            icon: Shield,
            description: 'Engaged in competitive technical tracks, vulnerability assessment challenges, and cloud security symposium tracks organized by NIT Trichy, sharpening security fundamentals and threat defense strategies.',
            tags: ['Cybersecurity', 'Cloud Defense', 'NIT Trichy']
        }
    ];

    const academicDistinctions = [
        {
            title: 'Diploma in Mechanical Engineering',
            institution: 'Sri Ramakrishna Mission Vidyalaya Polytechnic College',
            score: '84.91%',
            period: '2020 – 2023',
            detail: 'Graduated with First Class with Distinction, developing foundational rigor in engineering design, kinematic mechanics, and industrial precision.',
            icon: GraduationCap
        },
        {
            title: 'B.Tech in Artificial Intelligence & Data Science',
            institution: 'Anna University Regional Campus, Coimbatore',
            score: '7.4 CGPA',
            period: '2023 – 2027',
            detail: 'Undergraduate study focused on machine learning algorithms, deep learning vision models, data pipelines, and intelligent automation systems.',
            icon: Star
        }
    ];

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute w-64 h-64 md:w-96 md:h-96 bg-gray-100 rounded-full blur-3xl opacity-60 parallax-bg-1"
                    style={{ top: '10%', left: '5%' }}
                />
                <div
                    className="absolute w-64 h-64 md:w-96 md:h-96 bg-gray-50 rounded-full blur-3xl opacity-60 parallax-bg-2"
                    style={{ bottom: '10%', right: '5%' }}
                />
                <div
                    className="absolute w-32 h-32 md:w-48 md:h-48 bg-yellow-100 rounded-full blur-2xl opacity-30 parallax-bg-3"
                    style={{ top: '30%', right: '10%' }}
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
                        <div className="flex items-center gap-4">
                            <Button onClick={() => navigate('/certificates')} variant="ghost" className="text-sm text-gray-700 hover:text-black hover:bg-gray-100">
                                Certifications
                            </Button>
                            <Button onClick={() => navigate('/details')} variant="ghost" className="text-sm text-gray-700 hover:text-black hover:bg-gray-100">
                                Skills & Experience
                            </Button>
                            <div className="text-xl font-semibold text-black">SR</div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-gray-100 rounded-full mb-4 sm:mb-6 animate-fade-in-down">
                        <Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Achievements & Hackathons
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Competitive hackathons, institutional symposiums, and academic milestones demonstrating problem-solving under real-world pressure
                    </p>
                </div>
            </section>

            {/* Hackathons Grid */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 fade-in-section">
                        <h2 className="text-3xl sm:text-4xl font-light text-black mb-2">Hackathons & Competitions</h2>
                        <p className="text-sm sm:text-base text-gray-600">Events and technical innovation challenges</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                        {hackathons.map((item, idx) => (
                            <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-section group bg-white flex flex-col justify-between" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <CardHeader className="p-6 sm:p-8">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-black group-hover:text-white transition-all">
                                            <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                        </div>
                                        <Badge variant="outline" className="text-xs group-hover:bg-black group-hover:text-white transition-colors">
                                            {item.badge}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors mb-1">
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm font-medium text-gray-700 mb-3">
                                        {item.organization}
                                    </CardDescription>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardHeader>
                                <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                                        {item.tags.map((tag, tIdx) => (
                                            <Badge key={tIdx} variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic & Engineering Milestones */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 fade-in-section">
                        <h2 className="text-3xl sm:text-4xl font-light text-black mb-2">Academic & Engineering Foundation</h2>
                        <p className="text-sm sm:text-base text-gray-600">Educational track record and qualifications</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                        {academicDistinctions.map((edu, idx) => (
                            <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 fade-in-section group bg-gray-50/70 p-6 sm:p-8" style={{ animationDelay: `${idx * 0.15}s` }}>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white rounded-xl group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                                        <edu.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{edu.period}</span>
                                            <Badge className="bg-black text-white text-xs">{edu.score}</Badge>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-1">{edu.title}</h3>
                                        <p className="text-sm text-gray-600 font-medium mb-2">{edu.institution}</p>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{edu.detail}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 fade-in-section text-center">
                        <div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-2">4</div>
                            <p className="text-xs sm:text-sm text-gray-600">Major Hackathons & Events</p>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-2">84.9%</div>
                            <p className="text-xs sm:text-sm text-gray-600">Diploma Distinction</p>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-2">3+</div>
                            <p className="text-xs sm:text-sm text-gray-600">Industry & Training Roles</p>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-2">4+</div>
                            <p className="text-xs sm:text-sm text-gray-600">Cloud & AI Certifications</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center fade-in-section">
                    <h3 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">Explore more of my work</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Review my professional certifications or full technical skills profile</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button onClick={() => navigate('/certificates')} size="lg" className="bg-black hover:bg-gray-800 text-white transition-all hover:scale-105 w-full sm:w-auto">
                            <Award className="w-5 h-5 mr-2" />
                            View Certifications
                        </Button>
                        <Button onClick={() => navigate('/details')} variant="outline" size="lg" className="border-black text-black hover:bg-gray-50 transition-all hover:scale-105 w-full sm:w-auto">
                            View Skills & Experience
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button onClick={() => navigate('/')} variant="ghost" size="lg" className="text-black hover:bg-gray-100 transition-all hover:scale-105 w-full sm:w-auto">
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

export default AchievementsPage;
