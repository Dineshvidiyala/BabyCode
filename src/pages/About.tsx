import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Expert Instruction",
      description: "Our certified IELTS trainers provide top-tier guidance to help you master all four skills: Listening, Reading, Writing, and Speaking."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Personalized Learning",
      description: "We tailor our programs to individual needs, ensuring every student receives the attention and resources they require for success."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Proven Results",
      description: "Our methodology has helped thousands achieve their target band scores, with a focus on real-world practice and feedback."
    }
  ];

  const teamMembers = [
    {
      name: "Priya Nair",
      role: "Lead Instructor",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "With over 10 years of IELTS training experience, Priya specializes in Speaking and Writing modules."
    },
    {
      name: "Ravi Kumar",
      role: "Curriculum Designer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "Ravi crafts our innovative courses, integrating AI tools to predict and improve student performance."
    },
    {
      name: "Anjali Desai",
      role: "Student Support Lead",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "Anjali ensures every student gets personalized support, 24/7, to succeed in their IELTS journey."
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About IELTS Masters</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a leading IELTS preparation institute dedicated to helping students 
            achieve their dream band scores through expert guidance and innovative teaching methods.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2015, IELTS Masters emerged from a passion to make high-quality IELTS preparation 
                accessible to students worldwide. Our team of experienced instructors and language experts 
                recognized the need for comprehensive, personalized training in English proficiency.
              </p>
              <p>
                Since our inception, we've helped thousands of students succeed in their IELTS exams, 
                enabling them to pursue higher education, immigration, and career opportunities. 
                Our commitment to excellence and student success has made us a trusted name in IELTS preparation.
              </p>
              <p>
                Today, we continue to innovate with AI-powered tools and flexible learning options, 
                while upholding our core values of quality education and student empowerment.
              </p>
            </div>
          </div>
          <div className="lg:pl-8">
            <img
              src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our team teaching students"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join IELTS Masters Today</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            Start your journey to IELTS success with our expert-led courses and personalized support. 
            Book a free trial now and see the difference!
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Free Trial
          </a>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">8.5+</div>
              <div className="text-gray-600">Average Band Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
