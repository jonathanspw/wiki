(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{286:function(e,t,i){"use strict";i.r(t);var o=i(14),a=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"live-media"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#live-media"}},[e._v("#")]),e._v(" Live Media")]),e._v(" "),t("h2",{attrs:{id:"about-live-media"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-live-media"}},[e._v("#")]),e._v(" About Live Media")]),e._v(" "),t("p",[e._v("Live Media is a way to try AlmaLinux on your computer without installing it to the hard drive. You can run it from a USB or DVD to preview and for system rescue needs. Images support both BIOS and UEFI, including Secure Boot mode.")]),e._v(" "),t("h2",{attrs:{id:"live-media-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#live-media-options"}},[e._v("#")]),e._v(" Live Media Options")]),e._v(" "),t("p",[e._v("There are a few AlmaLinux Live Media Options:")]),e._v(" "),t("ul",[t("li",[e._v("GNOME Mini: contains a core GNOME environment with Firefox browser")]),e._v(" "),t("li",[e._v("GNOME: contains a full GNOME environment with popular workstation applications like LibreOffice, Thunderbird and so on.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/live-media-9-gnome.png",alt:"image"}})]),e._v(" "),t("ul",[t("li",[e._v("KDE: contains KDE desktop environment with Firefox browser, Konqueror browser, and applications like LibreOffice, Thunderbird, etc.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/live-media-9-kde.png",alt:"image"}})]),e._v(" "),t("ul",[t("li",[e._v("XFCE: contains XFCE desktop environment with Firefox browser, Thunderbird, LibreOffice, and more applications.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/live-media-9-xfce.png",alt:"image"}})]),e._v(" "),t("h2",{attrs:{id:"how-to-download-and-write-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-download-and-write-images"}},[e._v("#")]),e._v(" How to download and write images")]),e._v(" "),t("p",[e._v("The first step is to download an AlmaLinux image:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://repo.almalinux.org/almalinux/8/live/x86_64/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux 8 Live Images"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://repo.almalinux.org/almalinux/9/live/x86_64/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux 9 Live Images"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Then it all depends on what OS you use.")]),e._v(" "),t("p",[t("strong",[e._v("Linux:")])]),e._v(" "),t("p",[e._v("It is simple to use the dd command for any Linux OS.")]),e._v(" "),t("p",[e._v("Insert your target USB and locate it. There are different ways to do it but here are some of them:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("sudo fdisk -l")]),e._v("  - this command shows you the connected block storage devices, including the USB devices.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("lsblk")]),e._v(" - this command gives you all the available block storage devices, including the USB block storage devices.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("sudo blkid")]),e._v(" - this command gives you the same information as "),t("code",[e._v("lsblk")]),e._v(", but you have to rub it as root.")])])]),e._v(" "),t("p",[e._v("You need to look for /dev/sda or /dev/sdb or /dev/sdc, which is your target USB.")]),e._v(" "),t("p",[e._v("After you found out the location of your target USB, navigate to the location of your source ISO. Run dd command to copy files from ISO to USB:")]),e._v(" "),t("p",[t("code",[e._v("sudo dd if=/AlmaLinux-8-x86_64-Live-GNOME-Mini-beta-1.iso of=/dev/sdc status=progress")])]),e._v(" "),t("p",[t("code",[e._v("dd")]),e._v(": Start the dd command to write DVD/CD iso image.\n"),t("code",[e._v("if=AlmaLinux-8-x86_64-Live-GNOME-Mini-beta-1.iso")]),e._v(": path to the input file.\n"),t("code",[e._v("of=/dev/sdc")]),e._v(" : path to destination USB disk/stick.\n"),t("code",[e._v("status=progress")]),e._v(": display a progress bar while writing the image to the USB stick such as /dev/sdb.\nThat’s all! You now have ready Live AlmaLinux on a USB stick.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("This example is for AlmaLinux 8. Don't forget to replace "),t("strong",[e._v("8")]),e._v(" version with "),t("strong",[e._v("9")]),e._v(" to work with AlmaLinux 9 image.")])]),e._v(" "),t("p",[t("strong",[e._v("Windows:")])]),e._v(" "),t("p",[e._v("For Windows OS there is a helpful free and open-source application - "),t("a",{attrs:{href:"https://rufus.ie/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rufus"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Open the application, choose your target USB, ISO you need to burn, press start - and Live OS is ready to run.")]),e._v(" "),t("p",[t("strong",[e._v("MacOS:")])]),e._v(" "),t("p",[e._v("The cross-platform tool "),t("a",{attrs:{href:"https://www.balena.io/etcher/",target:"_blank",rel:"noopener noreferrer"}},[e._v("balenaEtcher"),t("OutboundLink")],1),e._v(" is used to write images on macOS. It is simple too. Open banlenaEtcher, choose the image and the USB, press Flash.")]),e._v(" "),t("p",[e._v("More details and information about AlmaLinux Live Media can be found on "),t("a",{attrs:{href:"https://wiki.almalinux.org/sigs/LiveMedia.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Live Media SIG"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);