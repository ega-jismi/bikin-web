import pygame
from pygame.locals import *
from OpenGL.GL import *
from OpenGL.GLU import *

def draw_square():
    glBegin(GL_QUADS)
    glColor3f(1.0, 1.0, 1.0) 
    glVertex2f(-1, 1)
    glVertex2f(1, 1)
    glVertex2f(1, -1)
    glVertex2f(-1, -1)
    glEnd()

def main():
    pygame.init()
    display = (800, 600)
    pygame.display.set_mode(display, DOUBLEBUF | OPENGL)
    pygame.display.set_caption("Persegi")

    #gluPerspective(45, (display[0] / display[1]), 0.1, 50.0)
   # glTranslatef(0.0, 0.0, -5.0)
    gluOrtho2D(-5,5,-5,5)
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
        draw_square()
        pygame.display.flip()
        pygame.time.wait(10)

if __name__ == "__main__":
    main()