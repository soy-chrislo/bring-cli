const components = [
	{
		id: 1,
		name: "Form",
		description:
			"Basic form component with username and password fields, and handle submit",
		url: "",
	},
	{
		id: 2,
		name: "React Router",
		description: "Basic React Router component with 3 routes",
		url: "",
	},
	{
		id: 3,
		name: "Toast",
		description: "Abstract component to show toast messages",
		preconfig: {
			dependencies: ["react-toastify"],
			devDependencies: [],
			scripts: [],
		},
		postconfig: {
			suggestions: [
				"Implement ToastProvider.tsx in your root node",
				"Implement useToast.ts whenever you need trigger toast function.",
			],
		},
		files: [
			{
				dir: "components",
				filename: "ToastProvider.tsx",
				content:
					"aW1wb3J0IHR5cGUgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gInJlYWN0IjsNCmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAicmVhY3QtdG9hc3RpZnkiOw0KaW1wb3J0ICJyZWFjdC10b2FzdGlmeS9SZWFjdFRvYXN0aWZ5Lm1pbi5jc3MiOw0KDQp0eXBlIFRvYXN0UHJvdmlkZXJQcm9wcyA9IFByb3BzV2l0aENoaWxkcmVuOw0KDQpmdW5jdGlvbiBUb2FzdFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogVG9hc3RQcm92aWRlclByb3BzKSB7DQoJcmV0dXJuICgNCgkJPD4NCgkJCXtjaGlsZHJlbn0NCgkJCTxUb2FzdENvbnRhaW5lciAvPg0KCQk8Lz4NCgkpOw0KfQ0KDQpleHBvcnQgZGVmYXVsdCBUb2FzdFByb3ZpZGVyOw0K",
			},
			{
				dir: "hooks",
				filename: "useToast.ts",
				content:
					"aW1wb3J0IHsgdG9hc3QgfSBmcm9tICJyZWFjdC10b2FzdGlmeSI7DQoNCmNvbnN0IHVzZVRvYXN0ID0gKCkgPT4gew0KCWNvbnN0IG5vdGlmeSA9IChtZXNzYWdlOiBzdHJpbmcpID0+IHsNCgkJdG9hc3QobWVzc2FnZSk7DQoJfTsNCg0KCXJldHVybiB7IG5vdGlmeSB9Ow0KfTsNCg0KZXhwb3J0IGRlZmF1bHQgdXNlVG9hc3Q7DQo=",
			},
		],
	},
];

export default components;
