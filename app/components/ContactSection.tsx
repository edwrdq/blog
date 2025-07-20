import { Mail, MessageCircle, Github } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gruvbox-yellow mb-6">
            Get In Touch
          </h2>
          <p className="text-gruvbox-fg2 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? 
            Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
            <div className="bg-gruvbox-bg1 rounded-xl p-8 border border-gruvbox-bg3 hover:border-gruvbox-blue transition-all duration-300 hover:shadow-lg hover:shadow-gruvbox-blue/10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gruvbox-blue/20 rounded-full mb-4">
                  <Mail className="text-gruvbox-blue" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gruvbox-fg0 mb-2">Email</h3>
                <p className="text-gruvbox-fg2 mb-4">Drop me a line anytime</p>
                <a 
                  href="mailto:edwardquintero@protonmail.com"
                  className="text-gruvbox-blue hover:text-gruvbox-purple transition-colors font-medium"
                >
                  edwardquintero@protonmail.com
                </a>
              </div>
            </div>
            
            <div className="bg-gruvbox-bg1 rounded-xl p-8 border border-gruvbox-bg3 hover:border-gruvbox-green transition-all duration-300 hover:shadow-lg hover:shadow-gruvbox-green/10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gruvbox-green/20 rounded-full mb-4">
                  <MessageCircle className="text-gruvbox-green" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gruvbox-fg0 mb-2">Discord</h3>
                <p className="text-gruvbox-fg2 mb-4">Let&apos;s have a quick chat</p>
                <span className="text-gruvbox-green font-medium">polikfc123</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gruvbox-fg1 mb-6">Find Me Online</h3>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/edwrdq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-gruvbox-bg1 rounded-xl border border-gruvbox-bg3 hover:border-gruvbox-blue hover:text-gruvbox-blue transition-all duration-300 hover:shadow-lg hover:shadow-gruvbox-blue/10"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}