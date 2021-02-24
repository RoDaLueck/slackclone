import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';

export const sidebarItemsData = [
   {
      icon: <MessageIcon />,
      text: "Thread",
      tooltip: "Threads you’re involved in will be collected right here."
   },
   {
      icon: <InboxIcon />,
      text: "All DMs",
      tooltip: "Direct messages to You"
   },
   {
      icon: <DraftsIcon />,
      text: "Mentions & Reactions",
      tooltip: "When people react to your messages or mention you or your keywords, you’ll see it here."
   },
   {
      icon: <BookmarkBorderIcon />,
      text: "Save Items",
      tooltip: "Mark your to-dos or save something for another time. Only you can see your saved items, so use them however you’d like."

   },
   {
      icon: <PeopleIcon />,
      text: "People & Groups",
      tooltip: "People you know.  Groups you like."
   },
   {
      icon: <AppsIcon />,
      text: "More",
      tooltip: "Show more channels."
   }
]

export const newChannelList = [
   {
      icon: "#",
      text: "Channel",
      tooltip: "Channel "
   },
   {
      icon: "#",
      text: "Channel",
      tooltip: "Channel "
   },
]
