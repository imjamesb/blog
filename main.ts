import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "James Bradlee",
  author: "James Bradlee",
  avatar: "https://avatars.githubusercontent.com/u/35933830?v=4",
  avatarClass: "rounded-[50%]",
  links: [
    { title: "Email", url: "mailto:post@jamesb.no" },
    { title: "GitHub", url: "https://github.com/imjamesb" },
  ],
  background: "#f9f9f9",
  middlewares: [
    //ga("")
  ],
});
