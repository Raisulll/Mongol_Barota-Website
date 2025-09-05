"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import {
  Check,
  Copy,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  Share2,
  Twitter
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ShareButtonProps {
  title: string;
  url: string;
  description?: string;
  image?: string;
  content?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  showText?: boolean;
}

export function ShareButton({ 
  title, 
  url, 
  description = "", 
  image,
  content,
  variant = "outline",
  size = "sm",
  showText = true 
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  // Extract first few lines from content
  const getContentPreview = () => {
    if (!content) return description;
    
    const lines = content.split('\n').filter(line => line.trim() && !line.startsWith('**'));
    const firstFewLines = lines.slice(0, 3).join(' ');
    const words = firstFewLines.split(' ').slice(0, 30);
    return words.length === 30 ? words.join(' ') + '...' : words.join(' ');
  };

  const contentPreview = getContentPreview();

  const shareData = {
    title,
    url,
    text: description,
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    }
  };

  const copyToClipboard = async () => {
    console.log('Copy to clipboard clicked');
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      console.log('Text copied successfully');
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      toast({
        title: "Copy failed",
        description: "Failed to copy link to clipboard.",
        variant: "destructive",
      });
    }
  };

  const shareToFacebook = () => {
    console.log('Facebook share clicked');
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareToLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  };

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`${description}\n\n${url}`);
    const emailUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = emailUrl;
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant={variant} 
            size={size} 
            className="gap-2 hover:scale-105 transition-transform"
          >
            <Share2 className="h-4 w-4" />
            {showText && "Share Article"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80 p-0">
          {/* Article Preview */}
          <div className="p-4 border-b bg-muted/30">
            {/* Article Image */}
            {image && (
              <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            {/* Article Title */}
            <h4 className="font-semibold text-sm mb-2 line-clamp-2 leading-tight">
              {title}
            </h4>
            
            {/* Article Content Preview */}
            <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-3">
              {contentPreview}
            </p>
            
            {/* URL Preview */}
            <div className="flex items-center text-xs text-muted-foreground">
              <span className="font-mono bg-muted px-2 py-1 rounded text-[10px] truncate">
                {url.replace(/^https?:\/\//, '')}
              </span>
            </div>
          </div>

          <div className="p-2">
            {/* Quick Actions */}
            <div className="mb-2">
              {/* Native Share (if supported) */}
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <DropdownMenuItem 
                  onClick={handleNativeShare} 
                  className="gap-3 py-3 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950/30"
                >
                  <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30">
                    <Share2 className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Share...</div>
                    <div className="text-xs text-muted-foreground">Use device share menu</div>
                  </div>
                </DropdownMenuItem>
              )}
              
              {/* Copy Link */}
              <DropdownMenuItem 
                onClick={copyToClipboard} 
                className="gap-3 py-3 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-950/30"
              >
                <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-900/30">
                  {copied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">
                    {copied ? "Copied!" : "Copy Link"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {copied ? "Link copied to clipboard" : "Copy article URL"}
                  </div>
                </div>
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator />
            
            {/* Social Media Platforms */}
            <div className="mt-2 space-y-1">
              <DropdownMenuItem 
                onClick={shareToFacebook} 
                className="gap-3 py-3 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950/30"
              >
                <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30">
                  <Facebook className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Facebook</div>
                  <div className="text-xs text-muted-foreground">Share on Facebook</div>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={shareToTwitter} 
                className="gap-3 py-3 px-3 rounded-md hover:bg-sky-50 dark:hover:bg-sky-950/30"
              >
                <div className="p-2 rounded-md bg-sky-100 dark:bg-sky-900/30">
                  <Twitter className="h-4 w-4 text-sky-500" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Twitter</div>
                  <div className="text-xs text-muted-foreground">Post on Twitter/X</div>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={shareToLinkedIn} 
                className="gap-3 py-3 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950/30"
              >
                <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30">
                  <Linkedin className="h-4 w-4 text-blue-700" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">LinkedIn</div>
                  <div className="text-xs text-muted-foreground">Share on LinkedIn</div>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={shareToWhatsApp} 
                className="gap-3 py-3 px-3 rounded-md hover:bg-green-50 dark:hover:bg-green-950/30"
              >
                <div className="p-2 rounded-md bg-green-100 dark:bg-green-900/30">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Send via WhatsApp</div>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={shareViaEmail} 
                className="gap-3 py-3 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-950/30"
              >
                <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-900/30">
                  <Mail className="h-4 w-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Email</div>
                  <div className="text-xs text-muted-foreground">Send via email</div>
                </div>
              </DropdownMenuItem>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
