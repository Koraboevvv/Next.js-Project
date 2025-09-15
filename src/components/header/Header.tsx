'use client'
import { memo } from 'react';
import Link from 'next/link';
import { Button, Flex, Layout, Menu } from 'antd';

const { Header: AntHeader } = Layout;

const Header = () => {
  const handleSignIn = () => {
    open("https://dashboard-gamma-plum-98.vercel.app/");
  };

  const menuItems = [
    { key: "home", label: <Link href="/">Home</Link> },
    { key: "about", label: <Link href="/about">About</Link> },
    { key: "contact", label: <Link href="/contact">Contact</Link> },
  ];

  return (
    <AntHeader className="!bg-white shadow-md sticky top-0 z-50 px-6 mb-[50px]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          <Link href="/">Loggoo</Link>
        </div>

        <Menu
          mode="horizontal"
          items={menuItems}
          className="flex-1 justify-center border-0 text-base font-medium"
        />

        <Flex gap="small" align="center">
          <Button type="primary" shape="round" size="middle" onClick={handleSignIn}>
            Sign in
          </Button>
          <Button shape="round" size="middle">
            <Link href="/login">Login</Link>
          </Button>
        </Flex>
      </nav>
    </AntHeader>
  );
};

export default memo(Header);
