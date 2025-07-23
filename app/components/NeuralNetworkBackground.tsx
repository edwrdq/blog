'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

interface NeuralNetworkBackgroundProps {
  className?: string;
}

export default function NeuralNetworkBackground({ className = '' }: NeuralNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const colors = useMemo(() => ({
    bg: '#282828', // dark0
    node: '#a89984', // gray
    connection: '#504945', // dark2
    accent: '#83a598', // blue
  }), []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize nodes
    const nodeCount = Math.floor((dimensions.width * dimensions.height) / 15000);
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      connections: [],
    }));

    // Find connections for each node
    nodesRef.current.forEach((node, _i) => {
      node.connections = [];
      nodesRef.current.forEach((otherNode, j) => {
        if (_i !== j) {
          const dist = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          if (dist < 120 && node.connections.length < 3) {
            node.connections.push(j);
          }
        }
      });
    });

    const animate = () => {
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw nodes
      nodesRef.current.forEach((node, _i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= dimensions.width) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(dimensions.width, node.x));
        }
        if (node.y <= 0 || node.y >= dimensions.height) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(dimensions.height, node.y));
        }

        // Draw connections
        ctx.strokeStyle = colors.connection;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.3;
        
        node.connections.forEach(connIndex => {
          const connNode = nodesRef.current[connIndex];
          const dist = Math.hypot(node.x - connNode.x, node.y - connNode.y);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connNode.x, connNode.y);
            ctx.stroke();
          }
        });

        // Draw node
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = colors.node;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 ${className}`}
      style={{ background: colors.bg }}
    />
  );
}