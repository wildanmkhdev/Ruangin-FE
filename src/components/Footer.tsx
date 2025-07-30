import React from "react";
import {
	Building2,
	Phone,
	Mail,
	MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from "lucide-react";

interface FooterLinkProps {
	href: string;
	children: React.ReactNode;
}

interface SocialLinkProps {
	href: string;
	icon: React.ReactNode;
	label: string;
}

interface ContactItemProps {
	icon: React.ReactNode;
	children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
	<li>
		<a
			href={href}
			className="text-gray-600 hover:text-green-600 hover:pl-2 transition-all duration-300 relative group text-sm font-medium">
			<span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-px bg-green-600 group-hover:w-3 transition-all duration-300 -ml-5"></span>
			{children}
		</a>
	</li>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
	<a
		href={href}
		aria-label={label}
		className="w-10 h-10 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-600/30">
		{icon}
	</a>
);

const ContactItem: React.FC<ContactItemProps> = ({ icon, children }) => (
	<div className="flex items-start space-x-3">
		<div className="text-green-600 mt-1 flex-shrink-0">{icon}</div>
		<div className="text-gray-600 text-sm font-medium">{children}</div>
	</div>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => (
	<h3 className="text-green-600 font-semibold text-lg mb-6 relative">
		{children}
		<div className="absolute bottom-0 left-0 w-8 h-0.5 bg-green-600 -mb-2"></div>
	</h3>
);

const FirstOfficeFooter: React.FC = () => {
	const serviceLinks: string[] = [
		"Sewa Kantor",
		"Virtual Office",
		"Meeting Room",
		"Coworking Space",
		"Event Space",
	];

	const companyLinks: string[] = [
		"Tentang Kami",
		"Tim Kami",
		"Karir",
		"Blog",
		"Press Release",
	];

	const legalLinks: { href: string; label: string }[] = [
		{ href: "#", label: "Privacy Policy" },
		{ href: "#", label: "Terms of Service" },
		{ href: "#", label: "Sitemap" },
	];

	const socialLinks: { href: string; icon: React.ReactNode; label: string }[] =
		[
			{ href: "#", icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
			{ href: "#", icon: <Twitter className="w-4 h-4" />, label: "Twitter" },
			{
				href: "#",
				icon: <Instagram className="w-4 h-4" />,
				label: "Instagram",
			},
			{ href: "#", icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
		];

	return (
		<>
			{/* Poppins Font Import */}
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
				rel="stylesheet"
			/>

			<footer
				className="bg-white border-t-1  text-white-800 relative"
				style={{ fontFamily: "Poppins, sans-serif" }}>
				<div className="max-w-6xl mx-auto px-6 py-16">
					{/* Main Footer Content */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
						{/* Company Info */}
						<div className="lg:col-span-1">
							<div className="flex items-center mb-6">
								<div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
									<Building2 className="w-6 h-6 text-white" />
								</div>
								<span className="text-2xl font-bold text-gray-800">
									Ruangin
								</span>
							</div>

							<p className="text-gray-600 mb-6 leading-relaxed text-sm font-normal">
								Kantor yang tepat dapat memberikan impact pekerjaan menjadi
								lebih baik dan sehat dalam tumbuhan karir.
							</p>

							<div className="flex space-x-4">
								{socialLinks.map((social, index) => (
									<SocialLink
										key={index}
										href={social.href}
										icon={social.icon}
										label={social.label}
									/>
								))}
							</div>
						</div>

						{/* Services */}
						<div>
							<SectionTitle>Layanan</SectionTitle>
							<ul className="space-y-3">
								{serviceLinks.map((service, index) => (
									<FooterLink key={index} href="#">
										{service}
									</FooterLink>
								))}
							</ul>
						</div>

						{/* Company */}
						<div>
							<SectionTitle>Perusahaan</SectionTitle>
							<ul className="space-y-3">
								{companyLinks.map((company, index) => (
									<FooterLink key={index} href="#">
										{company}
									</FooterLink>
								))}
							</ul>
						</div>

						{/* Contact */}
						<div>
							<SectionTitle>Kontak</SectionTitle>
							<div className="space-y-4">
								<ContactItem icon={<MapPin className="w-5 h-5" />}>
									<p className="font-normal">
										Jl. Sudirman No. 123
										<br />
										Jakarta Pusat 10220
										<br />
										Indonesia
									</p>
								</ContactItem>

								<ContactItem icon={<Phone className="w-5 h-5" />}>
									<a
										href="tel:+622112345678"
										className="hover:text-green-600 transition-colors duration-300 font-medium">
										+62 21 1234 5678
									</a>
								</ContactItem>

								<ContactItem icon={<Mail className="w-5 h-5" />}>
									<a
										href="mailto:info@firstoffice.co.id"
										className="hover:text-green-600 transition-colors duration-300 font-medium">
										info@firstoffice.co.id
									</a>
								</ContactItem>
							</div>
						</div>
					</div>

					{/* Footer Bottom */}
					<div className="border-t border-gray-200 pt-8">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
								<p className="text-gray-500 text-sm font-normal">
									© {new Date().getFullYear()} FirstOffice. All rights reserved.
								</p>

								<div className="flex space-x-6">
									{legalLinks.map((link, index) => (
										<a
											key={index}
											href={link.href}
											className="text-gray-500 hover:text-green-600 text-sm transition-colors duration-300 font-medium">
											{link.label}
										</a>
									))}
								</div>
							</div>

							<div className="flex items-center space-x-2">
								<div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
								<span className="text-gray-500 text-sm font-medium">
									Online & Ready to Help
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Subtle decorative elements */}
				<div className="absolute top-8 right-10 w-24 h-24 bg-green-100/20 rounded-full blur-xl" />
				<div className="absolute bottom-8 left-10 w-20 h-20 bg-green-100/20 rounded-full blur-xl" />
			</footer>
		</>
	);
};

export default FirstOfficeFooter;
