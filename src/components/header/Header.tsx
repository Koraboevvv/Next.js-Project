'use client'
import { memo } from 'react';
import Link from 'next/link';
import { Layout, Menu, Input, Flex, Badge } from 'antd';
import { AppstoreOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import Logo from "../logo.ui/Logo";

const { Header: AntHeader } = Layout;

const items = [
  {
    key: "shop",
    label: "Shop",
    icon: <AppstoreOutlined />,
    children: [
      { key: "men", label: <Link href="#">Men</Link> },
      { key: "women", label: <Link href="#">Women</Link> },
    ],
  },
  { key: "on-sale", label: <Link href="/sale">On Sale</Link> },
  { key: "new-arrivals", label: <Link href="/new">New Arrivals</Link> },
  { key: "brands", label: <Link href="/brands">Brands</Link> },
];

const Header = () => {
  return (
    <AntHeader className="!bg-white shadow-sm sticky top-0 z-50 px-6">
      <nav className="flex justify-between items-center max-w-7xl mx-auto w-full">

        <div className="text-2xl font-extrabold tracking-wide text-black">
          <Logo />
        </div>

        <Menu
          mode="horizontal"
          items={items}
          className="flex-1 justify-center border-0 text-base font-medium"
        />

        <div className="mx-6 flex-1 max-w-lg">
          <Input
            size="large"
            placeholder="Search for products..."
            prefix={<SearchOutlined />}
            className="rounded-[50px] bg-gray-100"
          />
        </div>

        <Flex gap="large" align="center">
          <Badge offset={[2, -2]}>
            <ShoppingCartOutlined style={{ fontSize: 22 }} />
          </Badge>
          <Link href='/profile'>
            <UserOutlined  style={{ fontSize: 22}} />
          </Link>
        </Flex>
      </nav>
    </AntHeader>
  );
};

export default memo(Header);
