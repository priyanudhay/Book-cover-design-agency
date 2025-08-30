import { type LucideProps } from "lucide-react"

export function PatternBackground(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 80 40"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M0 0h80v40H0z"
        fill="none"
      />
      <path
        d="M0 0h80v40H0z"
        fill="none"
      />
      <circle cx={20} cy={20} r={1} fill="currentColor" />
      <circle cx={40} cy={20} r={1} fill="currentColor" />
      <circle cx={60} cy={20} r={1} fill="currentColor" />
      <circle cx={80} cy={20} r={1} fill="currentColor" />
      <circle cx={20} cy={40} r={1} fill="currentColor" />
      <circle cx={40} cy={40} r={1} fill="currentColor" />
      <circle cx={60} cy={40} r={1} fill="currentColor" />
      <circle cx={80} cy={40} r={1} fill="currentColor" />
      <circle cx={20} cy={60} r={1} fill="currentColor" />
      <circle cx={40} cy={60} r={1} fill="currentColor" />
      <circle cx={60} cy={60} r={1} fill="currentColor" />
      <circle cx={80} cy={60} r={1} fill="currentColor" />
      <circle cx={20} cy={80} r={1} fill="currentColor" />
      <circle cx={40} cy={80} r={1} fill="currentColor" />
      <circle cx={60} cy={80} r={1} fill="currentColor" />
      <circle cx={80} cy={80} r={1} fill="currentColor" />
    </svg>
  )
}

export const Icons = {
  patternBackground: PatternBackground,
  // Re-export Lucide icons we're using
  ...{
    // Import Lucide icons one by one to keep bundle size small
    // We'll add more as needed
    palette: require('lucide-react').Palette,
    award: require('lucide-react').Award,
    clock: require('lucide-react').Clock,
    refreshCw: require('lucide-react').RefreshCw,
    deviceMobile: require('lucide-react').Smartphone,
    shield: require('lucide-react').ShieldCheck,
    twitter: require('lucide-react').Twitter,
    facebook: require('lucide-react').Facebook,
    instagram: require('lucide-react').Instagram,
    pinterest: require('lucide-react').Pinterest,
    menu: require('lucide-react').Menu,
    x: require('lucide-react').X,
    arrowRight: require('lucide-react').ArrowRight,
    chevronDown: require('lucide-react').ChevronDown,
    check: require('lucide-react').Check,
    plus: require('lucide-react').Plus,
    minus: require('lucide-react').Minus,
    star: require('lucide-react').Star,
    shoppingCart: require('lucide-react').ShoppingCart,
    user: require('lucide-react').User,
    search: require('lucide-react').Search,
    mail: require('lucide-react').Mail,
    phone: require('lucide-react').Phone,
    mapPin: require('lucide-react').MapPin,
    externalLink: require('lucide-react').ExternalLink,
    chevronRight: require('lucide-react').ChevronRight,
    chevronLeft: require('lucide-react').ChevronLeft,
    chevronUp: require('lucide-react').ChevronUp,
    loader: require('lucide-react').Loader2,
    alertCircle: require('lucide-react').AlertCircle,
    checkCircle: require('lucide-react').CheckCircle2,
    xCircle: require('lucide-react').XCircle,
    info: require('lucide-react').Info,
    helpCircle: require('lucide-react').HelpCircle,
    fileText: require('lucide-react').FileText,
    image: require('lucide-react').Image,
    download: require('lucide-react').Download,
    upload: require('lucide-react').Upload,
    trash: require('lucide-react').Trash2,
    edit: require('lucide-react').Edit,
    copy: require('lucide-react').Copy,
    link: require('lucide-react').Link,
    lock: require('lucide-react').Lock,
    unlock: require('lucide-react').Unlock,
    eye: require('lucide-react').Eye,
    eyeOff: require('lucide-react').EyeOff,
    filter: require('lucide-react').Filter,
    settings: require('lucide-react').Settings,
    logIn: require('lucide-react').LogIn,
    logOut: require('lucide-react').LogOut,
    userPlus: require('lucide-react').UserPlus,
    users: require('lucide-react').Users,
    home: require('lucide-react').Home,
    bookOpen: require('lucide-react').BookOpen,
    book: require('lucide-react').Book,
    bookMarked: require('lucide-react').BookMarked,
    bookmark: require('lucide-react').Bookmark,
    bookmarkPlus: require('lucide-react').BookmarkPlus,
    bookmarkMinus: require('lucide-react').BookmarkMinus,
    bookmarkCheck: require('lucide-react').BookmarkCheck,
    bookmarkX: require('lucide-react').BookmarkX,
    bookmarkHeart: require('lucide-react').BookmarkHeart,
    bookmarkPlus: require('lucide-react').BookmarkPlus,
    bookmarkMinus: require('lucide-react').BookmarkMinus,
    bookmarkCheck: require('lucide-react').BookmarkCheck,
    bookmarkX: require('lucide-react').BookmarkX,
    bookmarkHeart: require('lucide-react').BookmarkHeart,
  }
}
