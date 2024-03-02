import home from "../assets/home.png";
import homeActive from "../assets/home-active.png";
import video from "../assets/video.png";
import videoActive from "../assets/video-active.png";
import media from "../assets/media.png";
import mediaActive from "../assets/media-active.png";
import brand from "../assets/brand.png";
import brandActive from "../assets/brand-active.png";
import plus from "../assets/plus.png";
import edit from "../assets/edit.png";
import upload from "../assets/upload.png";
import access from "../assets/access.png";
import sad from "../assets/sad.png";
import upset from "../assets/upset.png";
import happy from "../assets/happy.png";
import accepted from "../assets/accepted.png";
import alert from "../assets/alert.png";
import rejected from "../assets/rejected.png";
import premium from "../assets/premium.png";

export const menus = [
  {
    pic: home,
    activePic: homeActive,
    title: "Home",
    path: "/user",
  },
  {
    pic: video,
    activePic: videoActive,
    title: "All Videos",
    path: "/user/all-videos",
  },
  {
    pic: media,
    activePic: mediaActive,
    title: "Media Storage",
    path: "/user/media-storage",
  },
  {
    pic: brand,
    activePic: brandActive,
    title: "Brand Kit",
    path: "/user/brand-kit",
  },
];

export const videos = [
  {
    name: "Product Showcase Video",
    status: "Exported",
  },
  {
    name: "Sales Training Video",
    status: "In Progress",
  },
  {
    name: "Sales Training Video",
    status: "In Progress",
  },
  {
    name: "Employee Onboarding Training",
    status: "Exported",
  },
  {
    name: "Sales Strategies Video Series",
    status: "Draft",
  },
  {
    name: "Advanced Training Module",
    status: "Exported",
  },
  {
    name: "Marketing Campaign Launch Video",
    status: "Draft",
  },
  {
    name: "Goal Setting Workshop",
    status: "Exported",
  },
  {
    name: "Leadership Development Series",
    status: "Exported",
  },
  {
    name: "Market Research Presentation",
    status: "Draft",
  },
  {
    name: "Corporate Culture Spotlight",
    status: "Exported",
  },
  {
    name: "Sales Strategies Video Series",
    status: "Draft",
  },
  {
    name: "Management Best Practices",
    status: "Exported",
  },
  {
    name: "Creative Thinking Symposium",
    status: "Exported",
  },
  {
    name: "Executive Coaching Series",
    status: "Exported",
  },
  {
    name: "Executive Coaching Series",
    status: "Exported",
  },
  {
    name: "Sales Strategies Video Series",
    status: "Draft",
  },
  {
    name: "Management Best Practices",
    status: "Exported",
  },
];

export const details = [
  {
    pic: plus,
    name: "New Projects",
    bgColor: "bg-purple-100",
    buttonBg: "bg-purple-950",
    title: "Create your first project",
  },
  {
    pic: edit,
    name: "Edit Video",
    bgColor: "bg-pink-100",
    buttonBg: "bg-pink-900",
    title: "Make changes to your videos",
  },
  {
    pic: upload,
    name: "Upload Brand",
    bgColor: "bg-emerald-100",
    buttonBg: "bg-emerald-900",
    title: "Upload your brand kit",
  },
  {
    pic: access,
    name: "Access Files",
    bgColor: "bg-amber-100",
    buttonBg: "bg-amber-700",
    title: "Access your file uploads",
  },
];

export const reactions = [sad, upset, happy];

export const answers = [
  "Go to your dashboard and click your profile icon at the top right corner.",
  "​Click on Account Settings.",
  "Click on the pen icon button to type the new email address and click Save to update it.",
  "The new email address will receive an email to confirm it. Click on Confirm new email address button to confirm it. Alternatively, copy and paste the link/URL included in the email.",
];

export const quickOptions = [
  "Payment and Subscription",
  "Account question",
  "Editing Questions",
  "Issue or Bug",
  "Something else",
];

export const notifications = [
  {
    pic: accepted,
    new: true,
    title: "Project Accepted  🎉",
    description:
      "<span  style='color:#4F46E5;'>@shawnmahbub </span>  accepted the job for Advanced Training Module.",
    time: "09:40 AM",
  },
  {
    pic: alert,
    new: false,
    title: "Exclusive Event Alert",
    description:
      "Join our annual event this weekend! Meet new people & more social. Register now!",
    time: "08:29 AM",
  },
  {
    pic: rejected,
    new: false,
    title: "Project Rejected",
    description:
      "<span style='color:#4F46E5;'>@shawnmahbub </span>  rejected the job for Advanced Training Module.",
    time: "20:30 PM",
  },
  {
    pic: premium,
    new: false,
    title: "Unlock Premium Features",
    description:
      "Upgrade to Premium for exclusive benefits & enhance your experience!",
    time: "10:30 AM",
  },
];

export const guidelines = [
  {
    title: "Brand Guidelines",
    subtitle:
      "Add brand images and custom watermarks and use them across your projects.",
    acceptType: "application/pdf",
    inputName: "guidelines",
  },
  {
    title: "Logos",
    subtitle:
      "Add brand images and custom watermarks and use them across your projects.",
    acceptType: "image/svg+xml",
    inputName: "logos",
  },
  {
    title: "Fonts",
    subtitle:
      "Add brand images and custom watermarks and use them across your projects.",
    acceptType: ".ttf, .otf, .woff, .woff2",
    inputName: "fonts",
  },
  {
    title: "Color Palette",
    subtitle:
      "Add your brand color palettes to maintain brand consistency across your videos",
    buttonName: "Add Color",
    acceptType: "image/*",
    inputName: "colors",
  },
  {
    title: "Image Assets",
    subtitle:
      "Add brand images and custom watermarks and use them across your projects.",
    inputName: "images",
  },
  {
    title: "Video Assets",
    subtitle:
      "Add brand videos and custom clips and use them across your projects.",
    acceptType: "video/*,.mkv",
    inputName: "videos",
  },
  {
    title: "Audio Assets",
    subtitle:
      "Add custom audio and use them for subtitles and caption in any videos",
    acceptType: ".mp3,audio/*",
    inputName: "audios",
  },
];

export const mediaStorage = [
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  },

  {
    folder: [
      {
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      },
      {
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      },
      {
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      },
      {
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      },
    ],
  },
  {
    folder: [
      {
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      },
      {
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      },
      {
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      },
      {
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      },
    ],
  },
];
