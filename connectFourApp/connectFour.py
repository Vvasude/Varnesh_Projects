
from turtle import position
import numpy as np
import pygame
import sys
import math

# (RGB)
BLUE = (0, 0, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
YELLOW = (255, 255, 0)
# Non changing variables
ROW_COUNT = 6
COLUMN_COUNT = 7


def createBoard():
    board = np.zeros((ROW_COUNT, COLUMN_COUNT))
    return board


def dropPiece(board, row, column, piece):
    board[row][column] = piece


def isValidLocation(board, column):
    return board[ROW_COUNT - 1][column] == 0


def getNextRow(board, column):
    for r in range(ROW_COUNT):
        if board[r][column] == 0:
            return r


def printBoard(board):
    # create the board to print bottom up like irl
    print(np.flip(board, 0))


def winningMove(board, piece):
    # check horizontal location
    # minus three because 3 columns cannot work logically
    for c in range(COLUMN_COUNT-3):
        for r in range(ROW_COUNT):
            if board[r][c] == piece and board[r][c+1] == piece and board[r][c+2] == piece and board[r][c+3] == piece:
                return True
    # check vertical location
    for c in range(COLUMN_COUNT):
        for r in range(ROW_COUNT-3):
            if board[r][c] == piece and board[r+1][c] == piece and board[r+2][c] == piece and board[r+3][c] == piece:
                return True

    # check positively sloped diagonal
    for c in range(COLUMN_COUNT-3):
        for r in range(ROW_COUNT-3):
            if board[r][c] == piece and board[r+1][c+1] == piece and board[r+2][c+2] == piece and board[r+3][c+3] == piece:
                return True

    # check negatively sloped diagonals
    for c in range(COLUMN_COUNT-3):
        for r in range(3, ROW_COUNT):
            if board[r][c] == piece and board[r-1][c+1] == piece and board[r-2][c+2] == piece and board[r-3][c+3] == piece:
                return True


def drawBoard(board):
    # draw with pygame graphics
    # iterate through every spot in the board
    for c in range(COLUMN_COUNT):
        for r in range(ROW_COUNT):
            pygame.draw.rect(screen, BLUE, (c*SQUARESIZE, r *
                             SQUARESIZE+SQUARESIZE, SQUARESIZE, SQUARESIZE))
            pygame.draw.circle(screen, BLACK, (int(
                c*SQUARESIZE+SQUARESIZE/2), int(r*SQUARESIZE+SQUARESIZE+SQUARESIZE/2)), RADIUS)

    for c in range(COLUMN_COUNT):
        for r in range(ROW_COUNT):
            if board[r][c] == 1:
                pygame.draw.circle(screen, RED, (int(
                    c*SQUARESIZE+SQUARESIZE/2), height-int(r*SQUARESIZE+SQUARESIZE/2)), RADIUS)
            elif board[r][c] == 2:
                pygame.draw.circle(screen, YELLOW, (int(
                    c*SQUARESIZE+SQUARESIZE/2), height-int(r*SQUARESIZE+SQUARESIZE/2)), RADIUS)
    # update board after clicking
    pygame.display.update()


board = createBoard()
printBoard(board)
gameOver = False
# intialize turns
turn = 0

pygame.init()
# game size in pixels
SQUARESIZE = 100

width = COLUMN_COUNT * SQUARESIZE
height = (ROW_COUNT+1) * SQUARESIZE
# create tuple to package the sizes
size = (width, height)

# Size of circles
RADIUS = int(SQUARESIZE/2 - 5)

# build screen
screen = pygame.display.set_mode(size)
drawBoard(board)
pygame.display.update()
# create a display winner
displayWinner = pygame.font.SysFont("monospace", 75)

while not gameOver:
    # pygame is an event based library
    for event in pygame.event.get():
        # exit when clicking X
        if event.type == pygame.QUIT:
            sys.exit()

        # track a new event
        if event.type == pygame.MOUSEMOTION:
            pygame.draw.rect(screen, BLACK, (0, 0, width, SQUARESIZE))
            # has a positon property
            position_x = event.pos[0]
            # draw circles based on position
            if turn == 0:
                pygame.draw.circle(
                    screen, RED, (position_x, int(SQUARESIZE/2)), RADIUS)
            else:
                pygame.draw.circle(
                    screen, YELLOW, (position_x, int(SQUARESIZE/2)), RADIUS)
        pygame.display.update()
        if event.type == pygame.MOUSEBUTTONDOWN:
            pygame.draw.rect(screen, BLACK, (0, 0, width, SQUARESIZE))
            # print(event.pos)
            # Ask for the first player input
            if turn == 0:
                position_x = event.pos[0]
                # give us range of 0-7 and round to nearest interger, and ensure as integer since we cant return float
                column = int(math.floor(position_x/SQUARESIZE))

                if isValidLocation(board, column):
                    row = getNextRow(board, column)
                    dropPiece(board, row, column, 1)

                if winningMove(board, 1):
                    label = displayWinner.render("Player 1 wins!!", 1, RED)
                    # upadates the part of the screen
                    screen.blit(label, (40, 10))
                    gameOver = True
    # Ask for second player input
            else:
                position_x = event.pos[0]
                # give us range of 0-7 and round to nearest interger, and ensure as integer since we cant return float
                column = int(math.floor(position_x/SQUARESIZE))

                if isValidLocation(board, column):
                    row = getNextRow(board, column)
                    dropPiece(board, row, column, 2)

                if winningMove(board, 2):
                    label = displayWinner.render("Player 2 wins!!", 1, YELLOW)
                    # upadates the part of the screen
                    screen.blit(label, (40, 10))
                    gameOver = True

            printBoard(board)
            drawBoard(board)
            turn += 1
            # To alternate between 0 and 1 for players
            turn = turn % 2

            if gameOver:
                pygame.time.wait(3000)
