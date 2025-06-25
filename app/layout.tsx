import { Suspense } from "react";
import Script from "next/script";
import { Inter } from "next/font/google";
import { ScrollToTopProvider } from "@/components/scroll-to-top-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import PageTransition from "@/components/page-transition";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <ScrollToTopProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1 overflow-hidden">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
              <BackToTop />
            </div>
          </ScrollToTopProvider>
        </Suspense>
        <Script
          id="docsbot-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.DocsBotAI=window.DocsBotAI||{};
              DocsBotAI.init=function(e){
                return new Promise((t,r)=>{
                  var n=document.createElement("script");
                  n.type="text/javascript";
                  n.async=!0;
                  n.src="https://widget.docsbot.ai/chat.js";
                  let o=document.getElementsByTagName("script")[0];
                  o.parentNode.insertBefore(n,o);
                  n.addEventListener("load",()=>{
                    let n;
                    Promise.all([
                      new Promise((t,r)=>{
                        window.DocsBotAI.mount(Object.assign({}, e)).then(t).catch(r)
                      }),
                      (n=function e(t){
                        return new Promise(e=>{
                          if(document.querySelector(t)) return e(document.querySelector(t));
                          let r=new MutationObserver(n=>{
                            if(document.querySelector(t)) return e(document.querySelector(t)),r.disconnect()
                          });
                          r.observe(document.body,{childList:!0,subtree:!0})
                        })
                      })("#docsbotai-root"),
                    ]).then(()=>t()).catch(r)
                  });
                  n.addEventListener("error",e=>{r(e.message)})
                })
              };
              DocsBotAI.init({id: "1x1KFVfHKZJfq4OXZmGw/GH0VgsH4Ii3wucsvOHsL"});
            `,
          }}
        />
      </body>
    </html>
  );
}
